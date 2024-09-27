import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const userData = { username, email, password, rol:"user", registeredAt: new Date().toISOString() };
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('hasVisited', 'true');
    navigate('/editProfile');
  };

  return (
  <div>
    <div className="flex flex-col items-center justify-center h-96 mt-0">
      <h1 className="text-4xl font-bold mb-8 text-slate-200">Register</h1>
      <div className="flex flex-col w-1/2 space-y-5">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </div>
    </div>
  </div>
  );
}

export default Register;
