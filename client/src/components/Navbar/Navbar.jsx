import React from 'react';
import { NavLink } from 'react-router-dom';

/*
prop object:
{
logo={
title:,
to:
}
middleOptions=[
{
title:,
to:,
icon:,
badge:,
isLoggedIn,
isLoggedOut
}
]
}
*/



const NavItem = ({ to, className, icon,badge, title }) => (
  <NavLink 
  to={to}
  className={({ isActive }) => 
    `py-5 px-3 flex items-center space-x-1 ${className} ${isActive ? 'text-orange-500' : 'text-gray-700'}`
  }
  >
    {icon && <span className="text-xl">{icon}</span>}
    <span>{title}</span>
    {badge && <span className=''>{badge}</span> }
  </NavLink>
);

const Navbar = ({ 
  logo = { title: "FoodieApp", to: "/" }, 
  middleOptions = [], 
  rightOptions = [], 
  isLoggedIn = false 
}) => {

  const filteredMiddleOptions = middleOptions.filter(option => 
    !option.isLoggedIn || isLoggedIn // Show option if it doesn't require login or if logged in
  );

  const filteredRightOptions = rightOptions.filter(option => 
    !option.isLoggedOut || !isLoggedIn // Show option if it doesn't require logged-out or if logged out
  );

  return (
    <nav className="bg-orange-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavItem 
            to={logo.to} 
            title={<span className="font-bold italic">{logo.title}</span>} 
            className="text-gray-700 hover:text-orange-500" 
          />

          {/* Middle Options - Displayed based on isLoggedIn */}
          <div className="flex space-x-4">
            {filteredMiddleOptions.map((option, index) => (
              <NavItem 
                key={index} 
                {...option} 
                className="text-gray-700 hover:text-orange-500" 
              />
            ))}
          </div>

          {/* Right Options - Include both logged-in specific and logged-out specific */}
          <div className="flex space-x-4">
            {filteredRightOptions.map((option, index) => (
              <NavItem 
                key={index} 
                {...option} 
                className="text-gray-700 hover:text-orange-500" 
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;