import { Link, NavLink } from 'react-router-dom'
import brandImage from '../assets/trippups-brand.jpg'

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="주 메뉴">
      <div className="site-nav-inner">
        <Link className="site-brand" to="/">
          <span className="site-brand-mark">
            <img src={brandImage} alt="" width="384" height="214" />
          </span>
          <span>TripPups</span>
        </Link>

        <div className="site-nav-links">
          <NavLink to="/" end>홈</NavLink>
          <NavLink to="/discover">여행지 탐색</NavLink>
          <NavLink className="site-nav-login" to="/login">로그인</NavLink>
        </div>
      </div>
    </nav>
  )
}
