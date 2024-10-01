import { useState } from 'react';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserToLocalStorage(user);
  };

  const addUserToLocalStorage = (newUser) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-10 shadow-md">
      <h2 className="text-3xl mb-6 text-center font-alfa text-slate-200">Register</h2>
      <div className="mb-4">
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-green-500"/>
      </div>
      <div className="mb-4">
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-green-500"/>
      </div>
      <div className="mb-4">
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-green-500"/>
      </div>
      <button type="submit" className="w-full text-zinc-900 py-2 rounded-md font-mono font-bold BotonStyle">
        Register
      </button>
    </form>
  );
}

export default Register;
