import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-orange-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <NavLink to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-orange-500">
                <span className="font-bold italic">FoodieApp</span>
              </NavLink>
            </div>
           
          </div> 
          {/* Secondary Nav */}
          <div className="flex items-center space-x-1">
            <NavLink  to="/login" className={()=>{`py-5 px-3`}}>Login</NavLink>
            <NavLink to="/register" className="m-3 py-2 px-3 bg-orange-400 hover:bg-orange-300 text-white hover:text-orange-800 rounded transition duration-300">Signup</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar