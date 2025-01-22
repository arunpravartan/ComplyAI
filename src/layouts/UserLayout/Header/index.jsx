import { useMemo } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import HeaderContent from './HeaderContent';


/***************************  ADMIN LAYOUT - HEADER  ***************************/

export default function Header() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  // Memoized header content to avoid unnecessary re-renders
  const headerContent = useMemo(() => <HeaderContent />, []);

  // Common header content
  const mainHeader = (
    <Toolbar sx={{ minHeight: { xs: 68, md: 76 } }}>
      {headerContent}
    </Toolbar>
  );

  // AppBar props, including styles that vary based on drawer state and screen size
  const appBar = {
    color: 'inherit',
    position: 'fixed',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      zIndex: 1200,
      width: { xs: '100%', lg: `calc(100% - ${0}px)` }
    }
  };

  return (
      <AppBar {...appBar}>{mainHeader}</AppBar>
  );
}
