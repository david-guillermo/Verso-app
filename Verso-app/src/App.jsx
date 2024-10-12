import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Vistas/Home";
import Account from "./Vistas/Account";
import About from "./Vistas/About";
import Register from "./Vistas/Register";
import EditProfile from "./Vistas/EditProfile";
import Crud from "./Vistas/Crud";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </>
  );
};

export default App;
