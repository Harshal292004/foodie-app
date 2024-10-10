import React from 'react'
import { Twitter, Instagram, Facebook } from 'lucide-react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" flex flex-row flex-wrap justify-between items-center py-3 my-4 border-t border-orange-200">
      <div className="flex items-center p-4">
        <span className="text-gray-600 font-bold italic">© 2024 FoodieApp, Inc</span>
      </div>
      <ul className="flex justify-end space-x-4 p-3">
        <li>
          <NavLink href="#" className="text-orange-500 hover:text-orange-600">
            <Twitter size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink href="#" className="text-orange-500 hover:text-orange-600">
            <Instagram size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink href="#" className="text-orange-500 hover:text-orange-600">
            <Facebook size={24} />
          </NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
