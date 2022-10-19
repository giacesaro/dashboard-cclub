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
import ButtonConnect from '../ButtonConnect'
import { Grid } from '@mui/material';
import '../../CSS/Home.css';
import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setSection } from '../../Redux/Sidebar/SidebarAction';
import { disconnectWeb3Modal } from '../../Redux/Blockchain/BlockchainAction';

const drawerWidth = 120;

function SidebarMobile(props) {
    let navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { active, deactivate } = useWeb3React();
    const [selected, setSelected] = React.useState('home');
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleChangeSection = (type) => {
        dispatch(setSection(type));
        setSelected(type);
        navigate("/", { replace: true });
    }

    const handleDisconnect = () => {
        dispatch(setSection('home'));
        setSelected('home');
        dispatch(disconnectWeb3Modal(deactivate));
    }

    const refMovement = useSelector(state => state.user.refMovement);
    var partnerPassPosseduti = 0;
    var elitePassPosseduti = 0;
    var premiumPassPosseduti = 0;
    if (active && Object.keys(refMovement).length !== 0) {
        let passConf = JSON.parse(refMovement.idPassConf);
        partnerPassPosseduti = passConf[0].passPosseduti;
        elitePassPosseduti = passConf[1].passPosseduti;
        premiumPassPosseduti = passConf[2].passPosseduti;
        console.log('pass', passConf[0].passPosseduti)
    }

    const isDisable = (passPosseduti) => {
        console.log('pass',passPosseduti)
        if (!active || passPosseduti === 0)
            return true;
        else
            return false;
    }

    const drawer = (
        <div className='bg-color-gradient !h-full'>
            <Toolbar />
            <List>
                <ListItem key={'home'} disablePadding>
                    <ListItemButton className='!justify-center !pl-11' onClick={() => handleChangeSection('home')}>
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
                <ListItem key={'partner'} disablePadding onClick={() => handleChangeSection('partner')} disabled={isDisable(partnerPassPosseduti)}>
                    <ListItemButton className={'!justify-center !pt-12 '}>
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
                <ListItem key={'elite'} disablePadding onClick={() => handleChangeSection('elite')} disabled={isDisable(elitePassPosseduti)}>
                    <ListItemButton className={'!justify-center '} disabled={isDisable(elitePassPosseduti)}>
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
                <ListItem key={'premium'} disablePadding onClick={() => handleChangeSection('premium')} disabled={isDisable(premiumPassPosseduti)}>
                    <ListItemButton className={'!justify-center '} disabled={isDisable(premiumPassPosseduti)}>
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
                {active &&
                    <ListItem key={'logout'} disablePadding onClick={handleDisconnect}>
                        <ListItemButton className='!justify-center !ml-8 !mt-32'>
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
    var background = '';
    switch (selected) {
        case 'home':
            background = 'bg-my-black'
            break;
        case 'partner':
            background = 'bg-partner-pass';
            break;
        case 'elite':
            background = 'bg-elite-pass';
            break;
        case 'premium':
            background = 'bg-premium-pass';
            break;
        default:
            break;
    }

    return (
        <Box className='mb-4' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className='!bg-transparent !shadow-none'
                position="fixed"
                sx={{
                }}
            >
                <Toolbar className={'!rounded-3xl ml-1 mr-1 mt-3 h-16  ' + background}>
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
                        <Grid item xs={7} className='self-center'>
                            <ButtonConnect type='mobile' />
                        </Grid>
                        <Grid item xs={3} className='relative'>
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
                    className='test '
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
