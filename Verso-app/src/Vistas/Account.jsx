import { useState, useEffect } from 'react';
import Login from './Login'; 
// import Register from './Register'; 
import EditProfile from './EditProfile';

const Account = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find((u) => u.isLoggedIn); // Busca si hay un usuario logueado
    if (currentUser) {
      setIsAuthenticated(true); // Si está logueado, establece autenticado en true
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); 
  };

  return (
    <div className="account-container">
      {isAuthenticated ? (
        <EditProfile /> // Mostrar el componente de Editar Perfil si el usuario está autenticado
      ) : (
        <>
          <Login onLoginSuccess={handleLoginSuccess} /> {/* Pasar función de éxito de login */}
          {/* <Register onRegisterSuccess={handleLoginSuccess} /> Pasar función de éxito de registro */}
        </>
      )}
    </div>
  );
};

export default Account;
