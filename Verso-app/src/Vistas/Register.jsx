import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Register = ({ onRegisterSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('Ya existe una cuenta con este email');
      return;
    }

    const newUser = { name, email, password, isLoggedIn: true };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onRegisterSuccess(); // Llamar a la función de éxito de registro
    navigate('/account');
  };

  return (
  <div className="RegisterCard">
    <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <input
        type="text"
        className="w-full mb-2 p-2 border"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button className="w-full bg-blue-500 text-white py-2 mt-4" onClick={handleRegister}>
        Registrarse
      </button>
    </div>
  </div>
  );
};


Register.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default Register;
