import React from "react";
import { Link } from 'react-router-dom';

// material-ui
import { Stack, Grid, Box, Typography, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Password } from "@mui/icons-material";

import Logo from 'components/logo';
import loginImage from "assets/images/auth/login.png";

import { useAuth } from 'hooks/useAuthContext';

// ================================|| LOGIN ||================================ //

export default function Login() {
  const { loading, user, login } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const credentials = [{
    name: 'Manish Srivastava',
    email: 'manish@pravartan.co.in',
    password: 'pravartan@123'
  }, {
    name: 'Arun Kumar',
    email: 'arun.kumar@pravartan.co.in',
    password: 'arun@123'
  }, {
    name: 'Gaurav Pandey',
    email: 'gaurav.pandey@pravartan.co.in',
    password: 'gaurav@123'
  }];

  const handleLogin = () => {
    const user = credentials?.find((cred) => cred?.email === email)
    if (user?.password === password) {
      login({
        ...user
      })
    } else {
      alert('Invalid credential.');
      return;
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Grid container sx={{ height: '100vh', bgcolor: '#ffff' }}>
      <Grid item xs={12} md={7} sx={{
          bgcolor: '#00579B',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: "-webkit-fill-available"
        }}>
          <img src={loginImage} alt="ComplyAI" style={{ height: '60%' }} />
      </Grid>
     
      <Grid item xs={12} md={5} sx={{ 
          p: { xs: 3, sm: 7 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <Grid xs={12} sm={6} md={12}>
            <Box px={3}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'gray',
                    mb: 1,
                    textAlign: 'center'
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 4 }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>
              {/* Login Button */}
              <Stack>
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
                <Box mt={4} display="flex" flexDirection="column" justifyContent="center">
                  <Logo sx={{ width: 'auto', height: 35 }} />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "10px !important",
                      color : "#00579B"
                    }}
                  >
                    One stop solution for your company 
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
      </Grid>
    </Grid>
  );
}
