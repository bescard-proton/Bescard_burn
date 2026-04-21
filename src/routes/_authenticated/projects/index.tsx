import { createFileRoute } from '@tanstack/react-router'

import { ProjectsPage } from './page'

export const Route = createFileRoute('/_authenticated/projects/')({
  head: () => ({
    meta: [
      {
        title: 'BesCARD Projects',
      },
      {
        name: 'description',
        content: 'Browse all BesCARD projects from local static data.',
      },
    ],
  }),
  component: ProjectsPage,
})
