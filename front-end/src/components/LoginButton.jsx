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
                <button onClick={logout} className="btn">
                  Déconnexion
                </button>
              ) : (
                <button onClick={handleLogin} className="btn">
                  Connexion
                </button>
              )}
    </div>
  );
}

export default LoginButton;
