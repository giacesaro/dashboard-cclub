import React, { useState } from 'react';
import '../App.css';
import '../CSS/Dashboard.css';
import '../CSS/Sidebar.css'
import { Card, Button } from '@mui/material';
import { Box } from '@mui/system';
import ResponsiveDrawer from './MobileComponents/SidebarMobile';

function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <Card className='w-32 ml-8 mt-6 bg-my-black !rounded-3xl'>
            <Box
                component="img"
                className='mt-4'
                alt="Logo"
                src="/images/Logo.png"
            />
            <Button className='mt-22p h-16'>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/home.png"
                />
            </Button>
            <Button className='!mt-14 h-16'>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/Member-icon.png"
                />
            </Button>
            <Button className='!mt-14 h-16'>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/Partner-icon.png"
                />
            </Button>
            <Button className='!mt-14 h-16 !mb-32'>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/Elite-icon.png"
                />
            </Button>
            <Button className='!mt-14 h-16 !mb-10'>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/logout.png"
                />
            </Button>
        </Card>
    );
}

export default Sidebar;
