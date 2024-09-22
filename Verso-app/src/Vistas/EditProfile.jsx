import { useState, useEffect } from 'react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Aqui cargo el perfil del usuario actual
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find((u) => u.isLoggedIn);
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, []);

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((user) => {
      if (user.isLoggedIn) {
        return { ...user, name, email }; // Actualizar el perfil
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Perfil actualizado');
  };

  return (
  <div className="EditProfileCard">
    <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Editar Perfil</h2>
      <input
        type="text"
        className="w-full mb-2 p-2 border"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="w-full mb-2 p-2 border"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white py-2 mt-4" onClick={handleSave}>
        Guardar cambios
      </button>
    </div>
  </div>
  );
};

export default EditProfile;
