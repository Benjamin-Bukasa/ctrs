import { Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


import { useAuthStore } from './../stores/auth.store';


function Navbar() {
    const { isAuthenticated, user, logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogin = async () => {

    navigate("/login");
  };

  return (
    <nav className='navbar'>
        <ul className='md:flex md:gap-4 md:items-center'>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/">Accueil</Link></li>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/about">A propos</Link></li>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/services">Services</Link></li>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/news">Actualités</Link></li>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/job">Emploi</Link></li>
            <li className='text-[18px] font-semibold text-gray-800 px-3 py-2 md:hover:bg-gray-100 md:hover:rounded-full md:hover:px-3 md:hover:py-2 md:ease-in-out md:duration-300'><Link to="/contact">Contacts</Link></li>
        </ul>
        <form className="displayFlex border rounded-lg px-2 py-1">
            <input type="text" name="search" placeholder="Recherche" className="outline-none rounded-lg px-4 py-2"/>
            <button><Search/></button>
        </form>
        <div>
          {isAuthenticated ? (
            <button onClick={logout} className="btnNav">
              Déconnexion
            </button>
          ) : (
            <button onClick={handleLogin} className="btnNav">
              Connexion
            </button>
          )}
        </div>
    </nav>
  )
}

export default Navbar