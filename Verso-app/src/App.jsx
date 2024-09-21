import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Vistas/Home";
import Account from "./Vistas/Account";
import About from "./Vistas/About";
import Service from "./Vistas/Services";
import Register from "./Vistas/Register";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
