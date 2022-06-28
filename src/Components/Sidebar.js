import React from 'react';
import '../App.css';
import '../CSS/Dashboard.css';
import '../CSS/Sidebar.css'
import { Card, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';

function Sidebar() {
    const { account, deactivate } = useWeb3React();
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
            {account &&
                <Button className='!mt-14 h-16 !mb-10' onClick={deactivate}>
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
        </Card>
    );
}

export default Sidebar;
