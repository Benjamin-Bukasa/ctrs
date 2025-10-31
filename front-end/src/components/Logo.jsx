import React from 'react';

const Logo = () => {
  return (
    <div className={`flex justify-center items-center text-xl font-bold italic uppercase font-poppins sm:text-4xl md:text-4xl`}>
      <img src="images/logo.png" alt="" className='w-[200px]'/>
    </div>
  );
}

export default Logo;
