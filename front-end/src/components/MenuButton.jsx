import { AlignJustify, X } from 'lucide-react';
import React from 'react';
import { useToggleNav } from '../stores/store';

const MenuButton = () => {

  const {open,setOpen} = useToggleNav()

  const handleClick = () => {
    setOpen(); 
  };

  return (
    <div className="flex justify-between items-center gap-1 2xs:max-xs:flex-1 2xs:max-xs:justify-between ">
      <button onClick={handleClick} className='p-2 rounded-md md:hidden transition-all duration-150'>{open?
        <X />:
        <AlignJustify 
        className=""/>}</button>
    </div>
  );
}

export default MenuButton;
