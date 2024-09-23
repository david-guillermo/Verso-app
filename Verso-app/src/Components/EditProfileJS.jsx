import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateUser } from '../utils/Auth';

const EditProfile = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

useEffect(() => {
    const user = getCurrentUser();
    if (user) {
    setEmail(user.email);
    setPassword(user.password);
    }
}, []);

const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { email, password, date: new Date().toISOString() };
    updateUser(updatedUser);
    navigate('/');
};

return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
    <h2 className="text-2xl mb-4">Edit Profile</h2>
    <input type="email" placeholder="Email" className="block mb-2 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder="Password" className="block mb-4 p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <button type="submit" className="bg-blue-500 text-white p-2">Update</button>
    </form>
);
};

export default EditProfile;
