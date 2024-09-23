// components/Account.jsx
import { useState } from "react";
import { registerUser, loginUser } from "/src/utils/Auth";

const Account = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isRegistering, setIsRegistering] = useState(true);

const handleSubmit = (e) => {
e.preventDefault();
const user = { email, password };

if (isRegistering) {
    registerUser(user);
    // Redirigir a EditProfile o mostrar un mensaje
} else {
    const loggedInUser = loginUser(email, password);
    if (loggedInUser) {
    // Redirigir a EditProfile o mostrar un mensaje
    }
}
};

return (
<div>
    <h1>{isRegistering ? "Register" : "Login"}</h1>
    <form onSubmit={handleSubmit}>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
    />
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
    />
    <button type="submit">{isRegistering ? "Register" : "Login"}</button>
    </form>
    <button onClick={() => setIsRegistering(!isRegistering)}>
    {isRegistering ? "Switch to Login" : "Switch to Register"}
    </button>
</div>
);
};

export default Account;
