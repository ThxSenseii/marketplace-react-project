import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './User.css';

function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Obtener los datos del usuario del localStorage
    const user = {
      userName: localStorage.getItem('user_name'),
      email: localStorage.getItem('useremail'),
      address: localStorage.getItem('address'),
      mobilPhone: localStorage.getItem('mobil_phone')
    };

    // Actualizar el estado con los datos del usuario
    setUserData(user);
  }, []);

  return (
    <div className="user-container overlay">
    <Container maxWidth="sm">
       
      <Typography variant="h4" gutterBottom>
        Información del usuario
      </Typography>
      {userData && (
        <div>
          <Typography variant="h6">Nombre Completo: {userData.userName}</Typography>
          <Typography variant="body1">Email: {userData.email}</Typography>
          <Typography variant="body1">Dirección: {userData.address}</Typography>
          <Typography variant="body1">Teléfono de contacto: {userData.mobilPhone}</Typography>
        </div>
      )}
    </Container>
    </div>
  );
}

export default User;
