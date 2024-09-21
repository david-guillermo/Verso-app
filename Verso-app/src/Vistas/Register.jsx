    import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        // Verifica si ya existe un usuario con el mismo email
        const userExists = users.some((user) => user.email === email);
        if (userExists) {
        setError("Ya existe una cuenta con este email");
        return;
        }
        // Si no existe, registra al usuario
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        // Redirige al usuario a la página de login después del registro
        navigate("/login");
    };
    return (
    <div className="RegisterCard">
        <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Registro</h2>
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
            <input
            type="password"
            className="w-full mb-2 p-2 border"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
            className="w-full bg-blue-500 text-white py-2 mt-4"
            onClick={handleRegister}
            >
            Registrarse
            </button>
            <p className="mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
                Inicia sesión aquí
            </Link>
            </p>
        </div>
    </div>
    );
    };

    export default Register;
