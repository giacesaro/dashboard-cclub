import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const SidebarMobile = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        className='mt-4 h-20'
                        alt="Logo"
                        src="/images/Logo.png"
                    />
                    <Button>
                        <Box
                            component="img"
                            className=''
                            alt="Home"
                            src="/images/home.png"
                        />
                    </Button>
                    <Button>
                        <Box
                            component="img"
                            className=''
                            alt="Home"
                            src="/images/Member-icon.png"
                        />
                    </Button>
                    <Button>
                        <Box
                            component="img"
                            className=''
                            alt="Home"
                            src="/images/Partner-icon.png"
                        />
                    </Button>
                    <Button>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/Elite-icon.png"
                />
            </Button>
            <Button>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/logout.png"
                />
            </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default SidebarMobile;
