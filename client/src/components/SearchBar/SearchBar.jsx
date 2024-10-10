import React, { useState, useEffect } from 'react';
import {Search } from 'lucide-react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Implement search logic here
      };
    
  return (
    <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:w-[250px] md:w-[300px] lg:w-[500px]">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
