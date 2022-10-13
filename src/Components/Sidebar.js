import React, { useState } from 'react';
import '../App.css';
import '../CSS/Dashboard.css';
import '../CSS/Sidebar.css'
import { Card, Button, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';
import { setSection } from '../Redux/Sidebar/SidebarAction';
import { useNavigate } from "react-router-dom";
import { disconnectWeb3Modal } from '../Redux/Blockchain/BlockchainAction';

function Sidebar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { account, deactivate, active } = useWeb3React();
    const [selected, setSelected] = useState('home');
    const refMovement = useSelector(state => state.user.refMovement);
    var partnerPassPosseduti = 0;
    var elitePassPosseduti = 0;
    var premiumPassPosseduti = 0;
    if (active && Object.keys(refMovement).length !== 0) {
        let passConf = JSON.parse(refMovement.idPassConf);
        partnerPassPosseduti = passConf[0].passPosseduti;
        elitePassPosseduti = passConf[1].passPosseduti;
        premiumPassPosseduti = passConf[2].passPosseduti;
    }

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

    const isDisable = (passPosseduti) => {
        if (!active || passPosseduti === 0)
            return true;
        else
            return false;
    }

    var background = '';
    switch (selected) {
        case 'home':
            background = 'border-my-black'
            break;
        case 'partner':
            background = 'border-partner-pass';
            break;
        case 'elite':
            background = 'border-elite-pass';
            break;
        case 'premium':
            background = 'border-premium-pass';
            break;
        default:
            break;
    }

    return (
        <Card className={'w-28 mt-6 ml-6 !mr-3 !rounded-3xl bg-color-gradient !border-4 box-shadow-side ' + background}>
            <Box
                component="img"
                className='mt-4'
                alt="Logo"
                src="/images/Logo.png"
            />
            <Button className='mt-22p h-16 info-button' onClick={() => handleChangeSection('home')}>
                <Box
                    component="img"
                    className='color-black-icon'
                    alt="Home"
                    src="/images/home.png"
                />
            </Button>
            <Tooltip title="Partner Pass" placement="right">
                <Button className={'!mt-14 h-16 info-button ' + (isDisable(partnerPassPosseduti) ? 'disable-icon' : '')} onClick={() => handleChangeSection('partner')} disabled={isDisable(partnerPassPosseduti)}>
                    <Box
                        component="img"
                        className=''
                        alt="Partner"
                        src="/images/Partner-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Elite Pass" placement="right">
                <Button className={'!mt-14 h-16 info-button '  + (isDisable(elitePassPosseduti) ? 'disable-icon' : '')} 
                        onClick={() => handleChangeSection('elite')} 
                        disabled={isDisable(elitePassPosseduti)}>
                    <Box
                        component="img"
                        className=''
                        alt="Elite"
                        src="/images/Elite-icon.png"
                    />
                </Button>
            </Tooltip>
            <Tooltip title="Premium Pass" placement="right">
                <Button className={'!mt-14 h-16 !mb-32 info-button '  + (isDisable(premiumPassPosseduti) ? 'disable-icon' : '')} 
                        onClick={() => handleChangeSection('premium')} 
                        disabled={isDisable(premiumPassPosseduti)}>
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
