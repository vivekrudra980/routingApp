import {Link} from 'react-router-dom'
// Write your JS code here
const Header = () => (
  <nav>
    <div>
      <img
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1>Wave</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
