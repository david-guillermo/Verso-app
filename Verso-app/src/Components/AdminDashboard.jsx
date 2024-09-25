import { useState, useEffect } from 'react';

function AdminDashboard() {
const [users, setUsers] = useState([]);

useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
    setUsers([user]);
    }
}, []);

const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.removeItem('user');
};

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
    <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>
    <table className="table-auto bg-white shadow-lg rounded-lg w-2/2">
        <thead>
        <tr>
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Date Registered</th>
            <th className="px-4 py-2 border">Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
            <tr key={user.email} className="text-center">
            <td className="px-4 py-2 border">{user.username}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{new Date(user.registeredAt).toLocaleDateString()}</td>
            <td className="px-4 py-2 border">
                <button
                onClick={() => handleDelete(user.email)}
                className="bg-red-400 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-500">
                Delete
                </button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default AdminDashboard;
