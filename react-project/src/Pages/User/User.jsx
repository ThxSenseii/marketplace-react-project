
/* import { getOneUser } from "../../services/user";
import { useState } from "react";
function User(){
    const [TheUser, setUser] = useState("");
    const handleUser = async () => {
        const data = await getOneUser(1);
        setUser(data);
    }
    return (
        <div>
            <button onClick={handleUser}>Ver un Usuario</button>
            <p>{TheUser.email}</p>
        </div>
    );
}

export default User; */


/* import { getOneUser } from "../../services/user";
import { useState } from "react";

function User() {
    const [theUser, setTheUser] = useState({});

    const handleUser = async () => {
        try {
            const userData = await getOneUser(); // Assuming getOneUser does not need any parameters
            setTheUser(userData);
        } catch (error) {
            console.error("Error fetching user:", error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <button onClick={handleUser}>Ver un Usuario</button>
            <div>
                <p>User Name: {theUser.user_name}</p>
                <p>Email: {theUser.email}</p>
                <p>Address: {theUser.address}</p>
                <p>Mobile Phone: {theUser.mobile_phone}</p>
            </div>
        </div>
    );
}

export default User; */

/* import { useState } from "react";

// Esta función realiza la solicitud a la API para obtener los datos de usuario
async function fetchUserData() {
    try {
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error(error.message);
    }
} */

/* import { useState } from 'react';
import { getUserData } from '../../services/auth';

function User() {
  const [userData, setUserData] = useState(null);

  const handleUser = async () => {
    try {
      const userId = userData.id; // Aquí deberías tener la ID del usuario que deseas obtener
      const userData = await getUserData(userId);
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleUser}>Obtener Datos de Usuario</button>
      {userData && (
        <div>
          <p>User Name: {userData.user_name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          <p>Mobile Phone: {userData.mobile_phone}</p>
        </div>
      )}
    </div>
  );
}

export default User; */

import { useState } from 'react';
import { signupp, loginn, getUserData } from '../../services/auth';

function User() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSignup = async (formData) => {
    try {
      const { userData, userId } = await signupp(formData);
      setUserId(userId);
      setUserData(userData);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const { userData, userId } = await loginn(formData);
      setUserId(userId);
      setUserData(userData);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleUser = async () => {
    try {
      if (!userId) {
        console.error('No user ID available');
        return;
      }
      const userData = await getUserData(userId);
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleSignup(formData)}>Sign Up</button>
      <button onClick={() => handleLogin(formData)}>Log In</button>
      <button onClick={handleUser}>Get User Data</button>
      {userData && (
        <div>
          <p>User Name: {userData.user_name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          <p>Mobile Phone: {userData.mobile_phone}</p>
        </div>
      )}
    </div>
  );
}

export default User;