import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../utils/Auth';

const Navbar = () => {
const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
    const user = getCurrentUser();
    if (user && user.email === 'juanitoAlimaña@maña.com') {
    setIsAdmin(true);
    } else {
    setIsAdmin(false);
    }
}, []);

return (
    <nav className="bg-gray-800 p-4">
    <ul className="flex justify-between items-center">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/account" className="text-white">Account</Link></li>
        <li><Link to="/about" className="text-white">About</Link></li>
        <li><Link to="/service" className="text-white">Service</Link></li>
        {isAdmin && <li><Link to="/crud" className="text-white">Admin CRUD</Link></li>}
    </ul>
    </nav>
);
};

export default Navbar;
