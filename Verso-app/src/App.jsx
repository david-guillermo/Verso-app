import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Vistas/Home";
import Account from "./Vistas/Account";
import About from "./Vistas/About";
import Service from "./Vistas/Services";
import Register from "./Vistas/Register";
import Login from "./Vistas/Login";
import EditProfile from "./Vistas/EditProfile";
// import UserCard from "./Components/UserCard";
// import UserList from "./Components/UserList";
import Profile from "./Vistas/Profile"; 
import AdminDashboard from "./Components/AdminDashboard";
import NavJS from "./Components/NavJS";
import EditProfileJS from "./Components/EditProfileJS";
// import Crud from "./Components/Crud";

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
        <Route path="/login" element={<Login />} />
        <Route path="/editprofile" element={<EditProfile />} />
        {/* <Route path="/usercard" element={<UserCard />} /> */}
        {/* <Route path="/userlist" element={<UserList />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/navjs" element={<NavJS />} /> 
        <Route path="/editprofilejs" element={<EditProfileJS />} />
        {/* <Route path="/crud" element={<Crud />} /> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
