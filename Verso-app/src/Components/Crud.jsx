import { useState, useEffect } from 'react';

const Crud = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
}, []);

const deleteUser = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
};

return (
    <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-2xl mb-4">Admin CRUD</h2>
    <ul>
        {users.map(user => (
        <li key={user.email} className="p-2 border-b">
            {user.email} - Registered on: {new Date(user.date).toLocaleString()}
            <button onClick={() => deleteUser(user.email)} className="ml-4 bg-red-500 text-white p-1">Delete</button>
        </li>
        ))}
    </ul>
    </div>
);
};

export default Crud;
