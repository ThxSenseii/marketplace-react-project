import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { loginn } from '../../services/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}loginn
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function LogIn() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let datalogin = await loginn({ 
      email: data.get('email'),
      password: data.get('password') 
    });

    console.log("Data from login service:", datalogin);

    if (datalogin.response && datalogin.response.status === 404) {
      return alert(datalogin.response.data);
    }

    localStorage.setItem("token", datalogin.userData.token);
    localStorage.setItem("useremail", datalogin.userData.email);
    localStorage.setItem("userid", datalogin.userId);
    localStorage.setItem("address", datalogin.userData.address);
    localStorage.setItem("mobil_phone", datalogin.userData.phone);
    localStorage.setItem("user_name", datalogin.userData.name);

    setLoggedIn(true);
  };

  // Redirigir al usuario a la página "user" después de iniciar sesión
  React.useEffect(() => {
    if (loggedIn) {
      navigate('/User');
    }
  }, [loggedIn, navigate]);

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginLeft: 'auto', marginRight: 'auto' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LogIn;

