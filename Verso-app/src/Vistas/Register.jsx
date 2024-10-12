import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...storedUsers, formData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    if (formData.email === 'juanitoAlimana@maña.com' && formData.name === 'JuanitoAlimaña') {
      localStorage.setItem('isAdmin', true); 
    } else {
      localStorage.setItem('isAdmin', false);
    }
    onRegister(formData);
    navigate('/');
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <h2 className="text-[#9aa046] dark:text-[#cbee00] flex justify-center font-alfa text-5xl m-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="text" name="name" value={formData.name} onChange={handleChange} />
            <label className="user-label dark:text-[#ffff]">Name:</label>
          </div>
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="email" name="email" value={formData.email} onChange={handleChange} />
            <label className="user-label dark:text-[#ffff]">Email:</label>
          </div>
          <div className="input-group">
            <input className="input dark:border dark:border-[#caee0071]" type="password" name="password" value={formData.password} onChange={handleChange} />
            <label className="user-label dark:text-[#ffff]">Password:</label>
          </div>
          <div className="flex justify-center items-center">
            <button className="dark:text-[#caee00dc] hover:text-[#e2ee0077] transition duration-500 font-mono font-bold text-2xl" type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;