import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Vistas/Home";
import Account from "./Vistas/Account";
import About from "./Vistas/About";
import Register from "./Components/Register";
import Login from "./Vistas/Login";
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
        <Route path="/login" element={<Login />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
