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
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-alfa mb-8 text-[#9aa046] dark:text-[#cbee00]">
        Welcome,{' '}
        <span className="bg-[#a3b388] dark:bg-[#7ea035a5] text-[#686b4d] dark:text-[#e6e6e6] px-2 py-1 rounded-lg">
          {user ? user.username : 'User'}
        </span>
        !
      </h1>
      <div className="flex flex-col">
        <div>
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <label className="user-label dark:text-[#ffff]">Username:</label>
          </div>
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="user-label dark:text-[#ffff]">Email:</label>
          </div>
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <label className="user-label dark:text-[#ffff]">Password:</label>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleSave} className="dark:bg-[#90a323c4] dark:text-white py-2 hover:bg-[#cbee00] w-52 rounded-xl font-mono">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
