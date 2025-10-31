import { Link } from 'react-router-dom';
import { NavLinks } from '../services/NavLinks';
import { useToggleNav } from "../stores/store";

import Logo from './Logo';

const Navbar = () => {
  const { open, setOpen } = useToggleNav();
  const handleOpen = () => setOpen(!open);


  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-2/3 h-full py-3 text-white md:text-[#fff] bg-[#1B1C4A] md:bg-[#1B1C4A] dark:bg-[#1B1C4A] dark:text-white transition-all duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} 
        md:static md:translate-x-0 md:w-auto md:h-auto md:dark:bg-transparent`}
    >
      <div className="md:hidden">
        <Logo />
      </div>
 
      <ul className="flex flex-col gap-8 p-4 md:flex-row md:gap-4 md:items-center md:p-0">
        {NavLinks.map((item) => (
          <li className="px-4" key={item.id}>
            <Link to={item.link} onClick={handleOpen}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
