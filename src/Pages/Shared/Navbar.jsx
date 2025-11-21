import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { Link } from 'react-router'
import useAuth from '../../hooks/useAuth'


const Navbar = () => {
  const {user, logOut}= useAuth();

  const Links = <>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Services</a></li>
    <li><Link to={'/map'}> Map</Link></li>  
  </>

  return (
  <div className="navbar rounded-xl bg-base-100 px-8 py-3 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <Logo></Logo>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-xl font-semibold px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {
      user? <button onClick={logOut} className='btn rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900' >Sign Out</button> : <div><Link to={'/login'} className="btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm sm:text-base">Sign In</Link>
     </div>
    }
  </div>
</div>
  )
}

export default Navbar