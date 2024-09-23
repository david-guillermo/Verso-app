import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [username, setUsername] = useState(user ? user.username : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [password, setPassword] = useState(user ? user.password : '');
  const navigate = useNavigate();

  const handleSave = () => {
    const updatedUser = { ...user, username, email, password };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome, {user ? user.username : 'User'}!</h1>
      <div className="flex flex-col w-1/3 space-y-4">
        <div>
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
