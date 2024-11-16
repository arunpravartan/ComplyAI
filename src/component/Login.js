import React from 'react';
import googleIcon from './Asset/google.png';
import appleIcon from './Asset/apple.png';
import { Icon, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './form.css';

function Login() {
  const navigate = useNavigate();

  const googleIconPng = (
    <Icon className="extLoginIcon">
      <img alt="Google" width="20px" height="20px" src={googleIcon} />
    </Icon>
  );
  const appleIconPng = (
    <Icon className="extLoginIcon">
      <img alt="Apple" width="20px" height="20px" src={appleIcon} />
    </Icon>
  );

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-cantainer">
        <h1 className="login-title">ComplyAI</h1>
        <p className="login-subtitle">One Step Solution For Your Company</p>
        <h2 className="login-heading">Sign in or Sign up to continue</h2>
        <Button
          variant="outlined"
          size="large"
          className="login-btn google-btn"
          startIcon={googleIconPng}
        >
          Continue with Google
        </Button>
        <br /><br />
        <Button
          variant="outlined"
          size="large"
          className="login-btn apple-btn"
          startIcon={appleIconPng}
        >
          Continue with Apple
        </Button>
        <br />
        <div className="divider"></div>
        <br />
        <div>
          <TextField
            name="email"
            label="Email ID"
            variant="outlined"
            placeholder="Enter your Email ID"
            className="login-input"
          />
        </div>
        <br />
        <div>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            placeholder="Enter your Password"
            className="login-input"
          />
        </div>
        <br />
        <Button
          variant="contained"
          className="continue-btn"
          size="large"
          onClick={handleLogin}
        >
          Continue
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
