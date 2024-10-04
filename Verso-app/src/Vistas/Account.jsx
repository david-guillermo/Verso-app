import { useState, useEffect } from "react";
import Register from "../Components/Register";
import EditProfile from "../Components/EditProfile";

function Account() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsRegistered(true);
      setUserData(JSON.parse(storedUser)); 
    }
  }, []);

  const onRegister = (newUserData) => {
    localStorage.setItem('user', JSON.stringify(newUserData));
    setIsRegistered(true); 
    setUserData(newUserData);
  };

  const handleProfileUpdate = (updatedUserData) => {

    localStorage.setItem('user', JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
  };

  return (
    <div>
      {isRegistered ? (
        <EditProfile userData={userData} onUpdate={handleProfileUpdate} />
      ) : (
        <Register onRegister={onRegister} />
      )}
    </div>
  );
}

export default Account;
