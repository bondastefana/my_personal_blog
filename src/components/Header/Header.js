import './Header.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './AppLogo.svg'

function Header() {
  return (
    <nav>
      <div>
        <Logo className="app-logo" />
      </div>
      <ul>
        <li>
          <Link className="page-link" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="page-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="page-link" to="/hobbies">
            Hobbies
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
