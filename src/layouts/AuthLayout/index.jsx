'use client';
import PropTypes from 'prop-types';

// @mui
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import LogoMain from '@/components/logo/LogoMain';
import GetImagePath from '@/utils/GetImagePath';

// @types

const loginImage = {
  light: '/assets/images/login-banner.png',
  dark: '/assets/images/login-banner.png'
};

/***************************  AUTH LAYOUT  ***************************/

export default function AuthLayout({ children }) {
  return (
    <Grid container sx={{ height: '100vh', padding: "90px", bgcolor : '#E9F5FF' }}>
        <Grid size={{ xs: 12, md: 6, lg: 7 }} sx={{
          bgcolor: '#00579B',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: "-webkit-fill-available",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px"
        }}>
          <img src={GetImagePath(loginImage)} alt="dashboard" style={{ maxWidth: '74%', maxHeight: '100%' }} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ p: { xs: 3, sm: 7 }, bgcolor: '#ffff', "zIndex": 999, 
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px" }}>
          {children}
        </Grid>
    </Grid>
  );
}

AuthLayout.propTypes = { children: PropTypes.any };
