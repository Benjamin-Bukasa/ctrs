import { Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { useAuthStore } from './../stores/auth.store';

function Navbar() {

    const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/news">Actualités</Link></li>
            <li><Link to="/job">Emploi</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
        </ul>
        <form>
            <input type="text" name="search" placeholder="Recherche"/>
            <button><Search/></button>
        </form>
        <div>
          {isAuthenticated ? (
            <button onClick={logout} className="btn">
              Déconnexion
            </button>
          ) : (
            <button onClick={logout} className="btn">
              Connexion
            </button>
          )}
        </div>
    </nav>
  )
}

export default Navbar