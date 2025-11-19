import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import MenuButton from './MenuButton';
import LoginButton from './LoginButton';



const Header = () => {

  

  return (
    <header className='w-full py-4 px-1 fixed top-0 left-0 shadow-md z-50 flex flex-row justify-between items-center gap-2 2xs:max-xs:justify-around sm:w-full lg:w-full sm:flex-row sm:justify-between sm:items-center md:px-10 lg:px-20 lg:flex-row lg:justify-between lg:items-center sm:max-[979px]:justify-between sm:max-[979px]:px-10 bg-[#fff] text-blue-700  md:m-auto'>
        <Logo/>
        <Navbar/>
        <LoginButton/>
        <MenuButton/>
    </header>
  );
}

export default Header;
