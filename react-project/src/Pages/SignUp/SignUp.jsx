/* import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signupp } from '../../services/auth';
import './SignUp.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website../Pages/SignUp/SignUp.jsx
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let datasignup = await signupp({ email: data.get('email'),
    password: data.get('password') , user_name: data.get('user_name'), address: data.get('address'), mobil_phone: data.get('mobil_phone')})
    localStorage.setItem("token", datasignup.token)
    localStorage.setItem("useremail", datasignup.email)
    localStorage.setItem("userid", datasignup.id)
    if (datasignup.message){
      alert(datasignup.message);
    } else {
      alert('Registration successful')
    }
    else{
      alert('Registration successful')
    }
    

    return datasignup;
    
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      {/* <h1>WELCOME TO BIKES</h1> */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FileUploadRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="user_name"
                  required
                  fullWidth
                  id="user_name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="address"
                  required
                  fullWidth
                  id="address"

                  label="Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="mobil_phone"
                  required
                  fullWidth
                  id="mobil_phone"
                  label="Mobil Phone"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/LogIn" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
} */
/* import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signupp } from '../../services/auth';
import './SignUp.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website../Pages/SignUp/SignUp.jsx
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let datasignup = await signupp({ 
      email: data.get('email'),
      password: data.get('password'),
      user_name: data.get('user_name'),
      address: data.get('address'),
      mobil_phone: data.get('mobil_phone')
    });

    localStorage.setItem("token", datasignup.userData.token);
    localStorage.setItem("useremail", datasignup.userData.email);
    localStorage.setItem("userid", datasignup.userData.id);

    if (datasignup.message) {
      alert(datasignup.message);
    } else {
      alert('Registration successful');
    }

    return datasignup;
  };

  return (
  <Container component="main" maxWidth="xs"sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginLeft: 'auto', marginRight: 'auto' }}>
    <CssBaseline />
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mb: 2 }}>
            <FileUploadRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="uname"
                  name="user_name"
                  required
                  fullWidth
                  id="user_name"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="mobil_phone"
                  label="Mobile Phone"
                  id="mobil_phone"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="text.secondary" align="center">
          </Typography>
        </Box>
      </Container>
  );
} */

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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signupp } from '../../services/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let dataSignUp = await signupp({
      email: data.get('email'),
      password: data.get('password'),
      user_name: data.get('user_name'),
      address: data.get('address'),
      mobil_phone: data.get('mobil_phone')
    });

    console.log("Data from sign up service:", dataSignUp);

    if (dataSignUp.response && dataSignUp.response.status === 409) {
      return alert(dataSignUp.response.data);
    }

    localStorage.setItem("token", dataSignUp.userData.token);
    localStorage.setItem("useremail", dataSignUp.userData.email);
    localStorage.setItem("userid", dataSignUp.userId);
    localStorage.setItem("address", dataSignUp.userData.address);
    localStorage.setItem("mobil_phone", dataSignUp.userData.phone);
    localStorage.setItem("user_name", dataSignUp.userData.name);

    setRegistered(true);
  };

  // Redirigir al usuario a la página "user" después de registrarse
  React.useEffect(() => {
    if (registered) {
      navigate('/User');
    }
  }, [registered, navigate]);

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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="user_name"
                  required
                  fullWidth
                  id="user_name"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobil_phone"
                  label="Mobile Phone"
                  type="text"
                  id="mobil_phone"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;


