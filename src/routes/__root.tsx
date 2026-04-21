import { createRootRoute, HeadContent, Link, Outlet, Scripts, } from '@tanstack/react-router'


export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: RootNotFound,
})

function RootComponent() {

  return (
    <>
      <HeadContent />
      <Outlet />
      <Scripts />
    </>
  )
}

function RootNotFound() {
  return (
    <main className="not-found-shell">
      <section className="not-found-panel">
        <h1>Page not found</h1>
        <p>The requested route is unavailable.</p>
        <Link className="button-link" to="/">
          Back to home
        </Link>
      </section>
    </main>
  )
}
