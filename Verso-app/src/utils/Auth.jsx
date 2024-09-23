// utils/auth.js
export const registerUser = (newUser) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.email === newUser.email);

    if (!userExists) {
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('user', JSON.stringify(newUser)); // Auto login
    } else {
    console.log("El usuario ya existe.");
    }
};

export const loginUser = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return user;
    } else {
    return null;
    }
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const logoutUser = () => {
    localStorage.removeItem('user');
};

export const updateUser = (updatedUser) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = existingUsers.findIndex(user => user.email === updatedUser.email);

    if (userIndex !== -1) {
    existingUsers[userIndex] = updatedUser;
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('user', JSON.stringify(updatedUser));
    }
};
