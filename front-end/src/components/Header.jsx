import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='md:w-full z-10 md:flex md:justify-between md:items-center md:mt-4 md:px-4 md:py-2 md:shadow-sm md:rounded-full md:bg-white md:border md:border-gray-200'>
        <Logo/>
        <Navbar/>
    </header>
  );
}

export default Header;
