import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='w-full md:flex md:justify-between md:items-center md:p-8'>
        <Logo/>
        <Navbar/>
    </header>
  );
}

export default Header;
