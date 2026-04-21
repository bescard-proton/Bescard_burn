export const APP_BASE_URL = import.meta.env.BASE_URL || '/'

export const APP_NAME = 'BesCARD Melt'

export const ORIGIN = typeof window === 'undefined' ? '' : window.location.origin

export function publicAsset(path: string) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${APP_BASE_URL}${normalizedPath}`
}

export const LOGO =
  typeof window === 'undefined'
    ? publicAsset('favicon.png')
    : new URL(publicAsset('favicon.png'), window.location.origin).toString()
