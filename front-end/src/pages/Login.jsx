import { useAuthStore } from "../stores/auth.store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const fakeUser = {
      user: { id: 1, name: "John Doe", role: "CANDIDAT" },
      token: "jwt-token-123",
    };

    login(fakeUser);
    navigate("/");
  };

  return (
    <div>
      <h2>Connexion</h2>
      <button onClick={handleLogin}>Se connecter</button>
      
    </div>
  );
}
