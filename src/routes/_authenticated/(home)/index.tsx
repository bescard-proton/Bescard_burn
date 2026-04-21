import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from './page'

export const Route = createFileRoute('/_authenticated/(home)/')({
  head: () => ({
    meta: [
      {
        title: 'BesCARD Melt',
      },
      {
        name: 'description',
        content: 'BesCARD melt access is gated by a JoyID CKB wallet connection.',
      },
    ],
  }),
  component: HomePage,
})
