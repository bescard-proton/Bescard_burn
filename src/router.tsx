import { createHashHistory, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

function getBasepath() {
  return import.meta.env.BASE_URL === '/'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/$/, '')
}

export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  basepath: getBasepath(),
  scrollRestoration: true,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
