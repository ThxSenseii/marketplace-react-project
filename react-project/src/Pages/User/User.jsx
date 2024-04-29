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