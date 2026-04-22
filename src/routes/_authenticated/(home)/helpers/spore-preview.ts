import { ccc } from '@ckb-ccc/core'
import {
  config as dobRenderConfig,
  renderByDobDecodeResponse,
  type DobDecodeResult,
  type ParsedTrait,
  type RenderOutput,
  svgToBase64,
  traitsParser,
} from '@nervape/dob-render'

import { DOB_DECODER_SERVER_URL } from '@/constant/DOB'

type ParsedDobDecodeResult = Omit<DobDecodeResult, 'render_output'> & {
  render_output: RenderOutput[]
}

type ResolvePreviewParams = {
  content: ccc.BytesLike
  contentType: string
  tokenKey: string
}

export type SporeRenderData = {
  displayName: string | null
  previewSrc: string | null
  storedValue: string | null
}

const DOB_DECODE_CACHE_PREFIX = 'bescard:dob-decode:'
const SPORE_RENDER_CACHE_PREFIX = 'bescard:spore-render:v2:'

const decodeResultCache = new Map<
  string,
  Promise<ParsedDobDecodeResult | null> | ParsedDobDecodeResult | null
>()
const renderDataCache = new Map<string, Promise<SporeRenderData> | SporeRenderData>()

dobRenderConfig.setDobDecodeServerURL(DOB_DECODER_SERVER_URL)

function normalizeTokenKey(tokenKey: string) {
  return tokenKey.trim().toLowerCase().replace(/^0x/, '')
}

function getDecodeStorageKey(tokenKey: string) {
  return `${DOB_DECODE_CACHE_PREFIX}${normalizeTokenKey(tokenKey)}`
}

function getRenderStorageKey(tokenKey: string) {
  return `${SPORE_RENDER_CACHE_PREFIX}${normalizeTokenKey(tokenKey)}`
}

function getStorage() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage
}

function parseDobDecodeResult(raw: string | DobDecodeResult) {
  const parsed = typeof raw === 'string' ? (JSON.parse(raw) as DobDecodeResult) : raw

  if (typeof parsed.render_output === 'string') {
    parsed.render_output = JSON.parse(parsed.render_output) as RenderOutput[]
  }

  return parsed as ParsedDobDecodeResult
}

function parseSporeRenderData(raw: string | SporeRenderData) {
  const parsed = typeof raw === 'string' ? (JSON.parse(raw) as SporeRenderData) : raw

  return {
    displayName: parsed.displayName ?? null,
    previewSrc: parsed.previewSrc ?? null,
    storedValue: parsed.storedValue ?? null,
  } satisfies SporeRenderData
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = ''

  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000))
  }

  return btoa(binary)
}

function bytesToUtf8(bytesLike: ccc.BytesLike) {
  return new TextDecoder().decode(ccc.bytesFrom(bytesLike))
}

function escapeSvgText(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function wrapPlainText(value: string, maxCharsPerLine = 18, maxLines = 5) {
  const normalized = value.replace(/\s+/g, ' ').trim()

  if (!normalized) {
    return []
  }

  const words = normalized.split(' ')
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    if (word.length > maxCharsPerLine) {
      if (current) {
        lines.push(current)
        current = ''
      }

      for (let index = 0; index < word.length; index += maxCharsPerLine) {
        lines.push(word.slice(index, index + maxCharsPerLine))
      }

      continue
    }

    const next = current ? `${current} ${word}` : word

    if (next.length > maxCharsPerLine) {
      lines.push(current)
      current = word
      continue
    }

    current = next
  }

  if (current) {
    lines.push(current)
  }

  if (lines.length <= maxLines) {
    return lines
  }

  const trimmed = lines.slice(0, maxLines)
  const lastLine = trimmed[maxLines - 1] || ''
  trimmed[maxLines - 1] =
    lastLine.length >= maxCharsPerLine ? `${lastLine.slice(0, maxCharsPerLine - 1)}…` : `${lastLine}…`
  return trimmed
}

function resolvePreviewFromPlainText(content: ccc.BytesLike) {
  const text = bytesToUtf8(content).trim()

  if (!text) {
    return null
  }

  const lines = wrapPlainText(text)

  if (lines.length === 0) {
    return null
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 480">
      <rect width="360" height="480" rx="24" fill="#FFFFFF" />
      <rect x="12" y="12" width="336" height="456" rx="18" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="8" />
      <text x="36" y="84" fill="#8C8C8C" font-family="Arial, sans-serif" font-size="18" font-weight="700">TEXT DOB</text>
      ${lines
        .map(
          (line, index) =>
            `<text x="36" y="${160 + index * 52}" fill="#1A1A1A" font-family="Arial, sans-serif" font-size="32" font-weight="700">${escapeSvgText(line)}</text>`,
        )
        .join('')}
    </svg>
  `

  return `data:image/svg+xml;base64,${bytesToBase64(new TextEncoder().encode(svg))}`
}

function getParsedTraits(decoded: ParsedDobDecodeResult | null) {
  if (!decoded) {
    return []
  }

  return traitsParser(decoded.render_output).traits
}

function getParsedStringTrait(traits: ParsedTrait[], traitName: string) {
  const trait = traits.find((item) => item.name === traitName)
  return typeof trait?.value === 'string' ? trait.value : null
}

function getPreferredDisplayNameFromTraits(traits: ParsedTrait[]) {
  for (const name of ['Name', 'name', 'Title', 'title', 'Account', 'account']) {
    const value = getParsedStringTrait(traits, name)

    if (value?.trim()) {
      return value.trim()
    }
  }

  const fallback = traits.find(
    (trait) =>
      typeof trait.value === 'string' &&
      trait.value.trim() &&
      !trait.name.startsWith('prev.') &&
      !['StoredValue', 'bgcolor', 'image'].includes(trait.name),
  )

  return typeof fallback?.value === 'string' ? fallback.value.trim() : null
}

async function getDobDecodeResult(tokenKey: string) {
  const requestTokenKey = tokenKey.trim().toLowerCase()
  const normalizedTokenKey = normalizeTokenKey(requestTokenKey)
  const cached = decodeResultCache.get(normalizedTokenKey)

  if (cached !== undefined) {
    return cached instanceof Promise ? cached : Promise.resolve(cached)
  }

  const task = (async () => {
    const storage = getStorage()
    const storageKey = getDecodeStorageKey(normalizedTokenKey)

    if (storage) {
      const stored = storage.getItem(storageKey)

      if (stored) {
        return parseDobDecodeResult(stored)
      }
    }

    const response = await fetch(DOB_DECODER_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 2,
        jsonrpc: '2.0',
        method: 'dob_decode',
        params: [requestTokenKey],
      }),
    })

    if (!response.ok) {
      throw new Error(`DOB decode failed: ${response.status}`)
    }

    const json = (await response.json()) as {
      error?: { message?: string }
      result?: string | DobDecodeResult
    }

    if (json.error) {
      throw new Error(json.error.message || 'DOB decode failed')
    }

    if (!json.result) {
      return null
    }

    const decoded = parseDobDecodeResult(json.result)

    if (storage) {
      storage.setItem(storageKey, JSON.stringify(decoded))
    }

    return decoded
  })()

  decodeResultCache.set(normalizedTokenKey, task)

  try {
    const decoded = await task
    decodeResultCache.set(normalizedTokenKey, decoded)
    return decoded
  } catch (error) {
    decodeResultCache.delete(normalizedTokenKey)
    throw error
  }
}

function resolvePreviewFromJsonContent(content: ccc.BytesLike) {
  try {
    const json = JSON.parse(bytesToUtf8(content)) as {
      preview?: { url?: string }
      resource?: { type?: string; url?: string }
    }

    if (json.preview?.url) {
      return json.preview.url
    }

    if (json.resource?.type?.startsWith('image') && json.resource.url) {
      return json.resource.url
    }
  } catch {
    return null
  }

  return null
}

function resolveDisplayNameFromJsonContent(content: ccc.BytesLike) {
  try {
    const json = JSON.parse(bytesToUtf8(content)) as Record<string, unknown>

    for (const key of ['name', 'title', 'dobName', 'label', 'account']) {
      const value = json[key]

      if (typeof value === 'string' && value.trim()) {
        return value.trim()
      }
    }
  } catch {
    return null
  }

  return null
}

function resolvePreviewFromContent(params: Pick<ResolvePreviewParams, 'content' | 'contentType'>) {
  if (params.contentType.startsWith('image/')) {
    const bytes = ccc.bytesFrom(params.content)
    return `data:${params.contentType};base64,${bytesToBase64(bytes)}`
  }

  if (params.contentType.startsWith('text/')) {
    return resolvePreviewFromPlainText(params.content) ?? resolvePreviewFromJsonContent(params.content)
  }

  if (params.contentType.startsWith('application/json')) {
    return resolvePreviewFromJsonContent(params.content)
  }

  return null
}

function resolveDisplayNameFromContent(params: Pick<ResolvePreviewParams, 'content' | 'contentType'>) {
  if (params.contentType.startsWith('text/')) {
    const text = bytesToUtf8(params.content).trim()
    return text || null
  }

  if (params.contentType.startsWith('application/json')) {
    return resolveDisplayNameFromJsonContent(params.content)
  }

  return null
}

function resolvePreviewFromDob(decoded: ParsedDobDecodeResult | null) {
  if (!decoded) {
    return null
  }

  const traits = getParsedTraits(decoded)
  const prevType = getParsedStringTrait(traits, 'prev.type')

  if (prevType === 'image') {
    return getParsedStringTrait(traits, 'prev.bg')
  }

  return null
}

function resolveStoredValueFromDob(decoded: ParsedDobDecodeResult | null) {
  if (!decoded) {
    return null
  }

  return getParsedStringTrait(getParsedTraits(decoded), 'StoredValue')
}

function resolveDisplayNameFromDob(decoded: ParsedDobDecodeResult | null) {
  if (!decoded) {
    return null
  }

  return getPreferredDisplayNameFromTraits(getParsedTraits(decoded))
}

async function resolveRenderedPreviewFromDob(decoded: ParsedDobDecodeResult | null) {
  if (!decoded) {
    return null
  }

  try {
    const svg = await renderByDobDecodeResponse(decoded)
    return svgToBase64(svg)
  } catch {
    return null
  }
}

async function resolveSporeRenderDataInner(params: ResolvePreviewParams): Promise<SporeRenderData> {
  const directPreview = resolvePreviewFromContent(params)
  const directDisplayName = resolveDisplayNameFromContent(params)

  if (directPreview) {
    return {
      displayName: directDisplayName,
      previewSrc: directPreview,
      storedValue: null,
    }
  }

  if (!['dob/0', 'dob/1'].includes(params.contentType)) {
    return {
      displayName: directDisplayName,
      previewSrc: null,
      storedValue: null,
    }
  }

  try {
    const decoded = await getDobDecodeResult(params.tokenKey)
    const storedValue = resolveStoredValueFromDob(decoded)
    const imagePreview = resolvePreviewFromDob(decoded)
    const displayName = resolveDisplayNameFromDob(decoded) ?? directDisplayName

    return {
      displayName,
      previewSrc: imagePreview ?? (await resolveRenderedPreviewFromDob(decoded)),
      storedValue,
    }
  } catch {
    return {
      displayName: directDisplayName,
      previewSrc: null,
      storedValue: null,
    }
  }
}

export async function resolveSporeRenderData(params: ResolvePreviewParams): Promise<SporeRenderData> {
  const normalizedTokenKey = normalizeTokenKey(params.tokenKey)
  const cached = renderDataCache.get(normalizedTokenKey)

  if (cached !== undefined) {
    return cached instanceof Promise ? cached : Promise.resolve(cached)
  }

  const storage = getStorage()
  const storageKey = getRenderStorageKey(normalizedTokenKey)

  if (storage) {
    const stored = storage.getItem(storageKey)

    if (stored) {
      const parsed = parseSporeRenderData(stored)
      renderDataCache.set(normalizedTokenKey, parsed)
      return parsed
    }
  }

  const task = resolveSporeRenderDataInner(params)

  renderDataCache.set(normalizedTokenKey, task)

  try {
    const resolved = await task
    renderDataCache.set(normalizedTokenKey, resolved)

    if (storage) {
      storage.setItem(storageKey, JSON.stringify(resolved))
    }

    return resolved
  } catch (error) {
    renderDataCache.delete(normalizedTokenKey)
    throw error
  }
}
