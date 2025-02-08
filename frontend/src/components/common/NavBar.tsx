import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/logo.png'

const NavBar = () => {
  return (
    <div id="container" className="fixed top-0 left-0 border-b-2 border-gray-500 bg-gray-500 flex w-full">
        <Link to='/' className='nav-logo flex items-center ml-2'>
          <img src={logo} alt='logo' width={50} />
        </Link>
        <ul className='nav-menu flex items-center justify-center w-full flex-grow space-x-5 '>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/Cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Signup">Signup</NavLink>
          </li>
      
        </ul>
      </div>
  )
}

export default NavBar
