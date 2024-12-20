import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography, Stack, TextField, Divider} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


const Login = () => {
      
  return (
    <Box className="login-page">
        <Box className="login-wrapper">
            <Stack alignItems={'center'} spacing={1} mb={3}>
                <Typography variant="h2" className="main-title">ComplyAI</Typography>
                <Typography variant="h5" className="info-text">AI Agent for SOP validation, knowledge search, and predictive analytics.</Typography>
            </Stack>
            
            <Box mb={2}>
                <Typography variant="h4" className="signup-text">Sign in or sign up to continue</Typography>
            </Box>
            <Box className="login-form-wrapper">
                <Stack spacing={2} mb={3}>
                    <Button variant="contained" size="large" className="google-login-btn" startIcon={<GoogleIcon />} sx={{borderRadius: '12px'}} disableRipple>Continue with Google</Button>
                    <Button variant="contained" size="large" className="apple-login-btn" startIcon={<AppleIcon />} sx={{borderRadius: '12px'}} disableRipple>Continue with Apple</Button>
                </Stack>

                <Divider>OR</Divider>

                <Stack justifyContent={'center'} alignItems={'center'} spacing={2} mt={2}>
                    <TextField id="outlined-basic" label="Enter your email" type="email" variant="outlined" fullWidth />
                    <TextField id="outlined-password-input" label="Enter your password" type="password" autoComplete="current-password" fullWidth/>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        className="continue-btn" 
                        component={RouterLink}
                        to="/dashboard"
                        sx={{width: '150px', borderRadius: '12px'}}
                        disableRipple>Continue</Button>
                </Stack> 
            </Box>            
        </Box> 
        
    </Box>
  )
}

export default Login
