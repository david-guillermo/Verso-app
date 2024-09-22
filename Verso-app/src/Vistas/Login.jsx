import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      user.isLoggedIn = true;
      localStorage.setItem('users', JSON.stringify(users));
      onLoginSuccess();
      navigate('/account');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
  <div className="LoginCard">
    <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        className="w-full mb-2 p-2 border"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full mb-2 p-2 border"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="w-full bg-blue-500 text-white py-2 mt-4" onClick={handleLogin}>
        Iniciar sesión
      </button>
      <p className="mt-4">
        ¿No tienes cuenta?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  </div>
  );
};


Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired, 
};

export default Login;
