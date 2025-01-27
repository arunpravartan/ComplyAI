import React from "react";
import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import login from "assets/images/auth/login.png";

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import { Box, Typography, TextField, Button, useMediaQuery  } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

// import { useAuth } from '../contexts/AuthProvider';

import Logo from 'components/logo';
import { Password } from "@mui/icons-material";

// ================================|| LOGIN ||================================ //

export default function Login() {
  // const { isAuthenticated, isLoading } = useAuth();
  const [credentialData, setCredentialData] = React.useState({
    name : 'Manish Srivastava',
    email : '',
    password : ''
  });
  const handleLogin = () => {
    if(!credentialData){
      alert('Invalid Credentials') ;
      return
    }
    if(credentialData?.password === 'pravartan@123' && credentialData?.email === 'manish@pravartan.co.in') {
      localStorage.setItem('credentialData', JSON.stringify(credentialData));
      window.location.href = '/';
    } else {
      alert('Invalid Credentials');
      return
    }
  }
  return (
    <Grid container sx={{ height: '100vh', padding: "90px", bgcolor : '#E9F5FF' }}>
      <Grid size={{ xs: 12, md: 8, lg: 8 }} sx={{
          bgcolor: '#00579B',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: "-webkit-fill-available",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px"
        }}>
          <img src={login} alt="dashboard" style={{ maxWidth: '85%', maxHeight: '100%', marginTop: '80px' }} />
      </Grid>
     
      <Grid size={{ xs: 12, md: 4, lg: 4}} 
        sx={{ p: { xs: 3, sm: 7 }, 
          bgcolor: '#ffff', "zIndex": 999, 
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px" }}>
        {/* Login Title */}
        <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color:'gray',
            mb: 1,
            textAlign: "center",
          }}
        >
          Sign In
        </Typography>

        {/* Social Login Buttons */}
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{
            mb: 3,
            textTransform: "none",
            color : "#25BAA2",
            borderColor: "#25BAA2"
          }}
        >
          Sign in with Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<AppleIcon />}
          fullWidth
          sx={{
            mb: 3,
            textTransform: "none",
            color : "#fff",
            bgcolor : "lightgrey",
            borderColor: "lightgrey",
            "&:hover": {
              bgcolor: "#fff",
              color : "#25BAA2",
            borderColor: "#25BAA2",
            },
          }}
        >
          Sign in with Apple
        </Button>
        {/* Email and Password Fields */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          onChange={(e) => setCredentialData({...credentialData, email : e.target.value})}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          onChange={(e) => setCredentialData({...credentialData, password : e.target.value})}
        />

        {/* Login Button */}
        <Box sx={{ display: "-webkit-box", justifyContent: "center" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#25BAA2",
            color: "white",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#25BAA2",
            },
          }}
          onClick={() => {handleLogin()}}
        >
          Login
        </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4 }}>
          <Logo sx={{ width: 'auto', height: 35 }} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "10px !important",
            color : "#00579B"
          }}
        >
          One step solution for your company 
        </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
