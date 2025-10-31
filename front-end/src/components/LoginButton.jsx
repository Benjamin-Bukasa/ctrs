import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from './../stores/auth.store';

const LoginButton = () => {

    const { isAuthenticated, user, logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogin = async () => {

    navigate("/login");
  };

  return (
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
  );
}

export default LoginButton;
