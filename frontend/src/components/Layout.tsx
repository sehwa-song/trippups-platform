import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function Layout() {
  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 TripPups</p>
      </footer>
    </>
  )
}