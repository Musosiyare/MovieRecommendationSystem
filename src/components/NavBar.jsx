import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full sticky top-0 bg-black-900'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          <span className='text-white'>Movie</span>.here.
        </h1>
      </Link>
      <div>
        <input
          type="search"
          name="search"
          placeholder='Search here...'
          className='p-2 rounded'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className='text-white bg-slate-500 p-2 rounded'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;


