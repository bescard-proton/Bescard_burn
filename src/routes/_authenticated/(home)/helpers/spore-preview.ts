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
const SPORE_RENDER_CACHE_PREFIX = 'bescard:spore-render:'

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

  if (
    params.contentType.startsWith('text/') ||
    params.contentType.startsWith('application/json')
  ) {
    return resolvePreviewFromJsonContent(params.content)
  }

  return null
}

function resolveDisplayNameFromContent(params: Pick<ResolvePreviewParams, 'content' | 'contentType'>) {
  if (
    params.contentType.startsWith('text/') ||
    params.contentType.startsWith('application/json')
  ) {
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
