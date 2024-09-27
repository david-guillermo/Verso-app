import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const adminUser = {
      username: 'JuanitoAlimaña',
      email: 'juanitoAlimaña@maña.com',
      password: 'Dinero123##',
    };

    if (email === adminUser.email && password === adminUser.password) {
      navigate('/AdminDashboard');
    } else if (user && user.email === email && user.password === password) {
      navigate('/editProfile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <div className="flex flex-col w-1/3 space-y-4">
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
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
