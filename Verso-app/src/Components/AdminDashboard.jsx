import { useEffect, useState } from 'react';

function AdminDashboard() {
const [users, setUsers] = useState([]);

useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
}, []);

const deleteUser = (email) => {
    const filteredUsers = users.filter((user) => user.email !== email);
    setUsers(filteredUsers);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
};

return (
    <div className="max-w-2xl mx-auto mt-10 justify-center items-center">
    <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center font-alfa text-slate-200">User List</h2>

    <table className="w-full h-52 table-auto shadow-md rounded-lg">
        <thead>
        <tr className="text-zinc-900 TOPCRUD">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={index} className="text-center border-t text-slate-200">
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.email}</td>
            <td className="px-4 py-2">
                <button onClick={() => deleteUser(user.email)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Delete User
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
