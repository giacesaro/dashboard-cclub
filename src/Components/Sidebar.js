import React, { useState } from 'react';
import '../App.css';
import '../CSS/Dashboard.css';
import '../CSS/Sidebar.css'
import { Card, Button, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { setSection } from '../Redux/Sidebar/SidebarAction';

function Sidebar() {
    const { account, deactivate } = useWeb3React();
    const [selected, setSelected] = useState('home');
    const dispatch = useDispatch();

    const handleChangeSection = (type) => {
        dispatch(setSection(type));
        setSelected(type);
    }

    var background = '';
    switch (selected) {
        case 'home':
            background = 'bg-my-black'
            break;
        case 'member':
            background = 'bg-member-pass';
            break;
        case 'partner':
            background = 'bg-partner-pass';
            break;
        case 'elite':
            background = 'bg-elite-pass';
            break;
        default:
            break;
    }

    return (
        <Card className={'w-32 mt-6 ml-6 !rounded-3xl ' + background}>
            <Box
                component="img"
                className='mt-4'
                alt="Logo"
                src="/images/Logo.png"
            />
            <Button className='mt-22p h-16 info-button' onClick={() => handleChangeSection('home')}>
                <Box
                    component="img"
                    className=''
                    alt="Home"
                    src="/images/home.png"
                />
            </Button>
            <Tooltip title="Add" placement="right">
                <Button className='!mt-14 h-16 info-button' onClick={() => handleChangeSection('member')}>
                    <Box
                        component="img"
                        className=''
                        alt="Home"
                        src="/images/Member-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Add" placement="right">
                <Button className='!mt-14 h-16 info-button' onClick={() => handleChangeSection('partner')}>
                    <Box
                        component="img"
                        className=''
                        alt="Home"
                        src="/images/Partner-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Add" placement="right">
                <Button className='!mt-14 h-16 !mb-32 info-button' onClick={() => handleChangeSection('elite')}>
                    <Box
                        component="img"
                        className=''
                        alt="Home"
                        src="/images/Elite-icon.png"
                    />
                </Button>
            </Tooltip>
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
        </Card>
    );
}

export default Sidebar;
