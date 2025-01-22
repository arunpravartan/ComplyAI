'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import Header from './Header';
import { handlerDrawerOpen, useGetMenuMaster } from '@/states/menu';
import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';
import useConfig from '@/hooks/useConfig';

/***************************  ADMIN LAYOUT  ***************************/

export default function UserLayout({ children }) {
  const { menuMasterLoading } = useGetMenuMaster();

  if (menuMasterLoading) return <Loader />;

  return (
    <Stack direction="row" width={1}>
      <Header />
      {/* <Drawer /> */}
      <Box component="main" sx={{ width: `calc(100% - ${0}px)`, flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ minHeight: { xs: 54, sm: 46, md: 76 } }} />
        <Box
          sx={{
            py: 0.4,
            px: 1.5,
            mx: { xs: -2, sm: -3 },
            display: { xs: 'block', md: 'none' },
            borderBottom: 1,
            borderColor: 'divider',
            mb: 2
          }}
        >
          <Breadcrumbs />
        </Box>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          {children}
        </Container>
      </Box>
    </Stack>
  );
}

UserLayout.propTypes = { children: PropTypes.any };
