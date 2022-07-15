import React, { useState } from 'react';
import '../App.css';
import '../CSS/Dashboard.css';
import '../CSS/Sidebar.css'
import { Card, Button, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { setSection } from '../Redux/Sidebar/SidebarAction';
import { useNavigate } from "react-router-dom";
import { disconnectWeb3Modal } from '../Redux/Blockchain/BlockchainAction';

function Sidebar() {
    let navigate = useNavigate();
    const { account, deactivate, active } = useWeb3React();
    const [selected, setSelected] = useState('home');
    const dispatch = useDispatch();

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
        <Card className={'w-28 mt-6 ml-6 !mr-3 !rounded-3xl ' + background}>
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
            <Tooltip title="Partner Pass" placement="right">
                <Button className='!mt-14 h-16 info-button' onClick={() => handleChangeSection('partner')} disabled={!active}>
                    <Box
                        component="img"
                        className=''
                        alt="Partner"
                        src="/images/Partner-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Elite Pass" placement="right">
                <Button className='!mt-14 h-16 info-button' onClick={() => handleChangeSection('elite')} disabled={!active}>
                    <Box
                        component="img"
                        className=''
                        alt="Elite"
                        src="/images/Elite-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Premium Pass" placement="right">
                <Button className='!mt-14 h-16 !mb-32 info-button' onClick={() => handleChangeSection('premium')} disabled={!active}>
                    <Box
                        component="img"
                        className=''
                        alt="Premium"
                        src="/images/Premium-icon.png"
                    />
                </Button>
            </Tooltip>
            {account &&
                <Button className='!mt-14 h-16 !mb-10 info-button' onClick={handleDisconnect}>
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
