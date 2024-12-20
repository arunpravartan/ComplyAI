import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';

export default function MobileDrawerMenu() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%'}} role="presentation" onClick={toggleDrawer(false)}>
      <Stack justifyContent={'space-between'} spacing={2} sx={{height: '100%'}}>            
            <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>         
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <WorkHistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={'History'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>                
            </List>

            <List sx={{marginBottom: '1rem!important'}}>  
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AccountCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Avani Srivastava'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>  
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>                
            </List>
        </Stack>
    </Box>
  );

  return (
    <div>        
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </div>
  );
}