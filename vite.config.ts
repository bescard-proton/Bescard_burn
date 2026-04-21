import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

function normalizeBasePath(value: string) {
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

function resolvePublicBasePath(env: Record<string, string>) {
  const explicitBasePath =
    process.env.PUBLIC_BASE_PATH ??
    process.env.VITE_PUBLIC_BASE ??
    process.env.BASE_PATH ??
    env.PUBLIC_BASE_PATH ??
    env.VITE_PUBLIC_BASE ??
    env.BASE_PATH

  if (explicitBasePath) {
    return normalizeBasePath(explicitBasePath)
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const isProjectPagesBuild =
    process.env.GITHUB_ACTIONS === 'true' &&
    repositoryName &&
    !repositoryName.endsWith('.github.io')

  if (isProjectPagesBuild) {
    return normalizeBasePath(repositoryName)
  }

  return '/'
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: resolvePublicBasePath(env),
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      tailwindcss(),
      tanstackRouter({
        target: 'react',
        routeFileIgnorePattern: '^(components|hooks|helpers)$|^(page|seo)\\.(ts|tsx)$',
      }),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
  }
})
