import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import '../../CSS/Home.css';
import { useWeb3React } from '@web3-react/core';

const drawerWidth = 120;

function SidebarMobile(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { account, deactivate } = useWeb3React();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                <ListItem key={'home'} disablePadding>
                    <ListItemButton className='!justify-center !pl-11'>
                        <ListItemIcon>
                            <Box
                                component="img"
                                className=''
                                alt="Home"
                                src="/images/home.png"
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'partner'} disablePadding>
                    <ListItemButton className='!justify-center !pt-12'>
                        <ListItemIcon>
                            <Box
                                component="img"
                                className='h-24'
                                alt="Partner"
                                src="/images/Partner-icon.png"
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'elite'} disablePadding>
                    <ListItemButton className='!justify-center'>
                        <ListItemIcon>
                            <Box
                                component="img"
                                className='h-24'
                                alt="Elite"
                                src="/images/Elite-icon.png"
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'premium'} disablePadding>
                    <ListItemButton className='!justify-center'>
                        <ListItemIcon>
                            <Box
                                component="img"
                                className='h-24'
                                alt="Premium"
                                src="/images/Premium-icon.png"
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                {!account &&
                    <ListItem key={'logout'} disablePadding>
                        <ListItemButton className='!justify-center !ml-8 !mt-72'>
                            <ListItemIcon>
                                <Box
                                    component="img"
                                    alt="Logout"
                                    src="/images/logout.png"
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='mb-4' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className='!bg-transparent !shadow-none'
                position="fixed"
                sx={{
                }}
            >
                <Toolbar className='bg-my-black !rounded-3xl ml-1 mr-1 mt-3 h-16'>
                    <Grid container>
                        <Grid item xs={2} className='self-center'>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Grid>
                        <Grid item xs={10} className='relative l-20p'>
                            <Box
                                component="img"
                                className='h-24'
                                alt="Logo"
                                src="/images/Logo-Mobile2.png"
                            />

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    className='test'
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#ccc3c3' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
            </Box>
            {account &&
                <Button className='!mt-14 h-16 !mb-10 info-button' onClick={deactivate}>
                    <Box
                        component="img"
                        className=''
                        alt="Home"
                        src="/images/logout.png"
                    />
                </Button>
            }
            {!account &&
                <Box
                    component="div"
                    className='!mt-14 h-16 !mb-10'
                    alt="Home"
                />
            }
        </Box>
    );
}

SidebarMobile.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SidebarMobile;
