import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import login from "assets/images/auth/login.png";

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import { Box, Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

// import { useAuth } from '../contexts/AuthProvider';

import Logo from 'components/logo';

// ================================|| LOGIN ||================================ //

export default function Login() {
  // const { isAuthenticated, isLoading } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "50px"
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00579B", // Change to preferred color
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          <img src={login} alt="dashboard" style={{ maxWidth: '74%', maxHeight: '100%', marginTop: '95px' }} />
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "white",
        }}
      >
        {/* Login Title */}
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
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        {/* Login Button */}
        <Box sx={{ width: "100%", display: "-webkit-box", justifyContent: "center" }}>
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
    </Box>
  );
}
