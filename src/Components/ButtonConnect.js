import React, { Fragment } from 'react';
import { Button, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { connectWallet } from '../Redux/Blockchain/BlockchainAction';
import '../CSS/Dashboard.css'
import { contractPartner } from '../Utils/config';

function ButtonConnect(props) {
    const { activate, active, account } = useWeb3React();
    const dispatch = useDispatch();

    const handleConnect = () => {
        dispatch(connectWallet(activate, contractPartner))
    };

    return (
        <Fragment>
            {!active &&
                <Button variant='outlined' className={'h-10 border-my-black !text-black font-openSans-extrabold ' + (props.type !== 'mobile' ? 'bg-transparent' : '!bg-white')} onClick={handleConnect}>
                    CONNECT WALLET
                </Button>
            }
            {active &&
                <Typography variant='body1' className='h-10 font-openSans-light !text-lg !font-medium text-ellipsis ' sx={{ mt: { xs: 1.5, md: 0 } }}>
                    {account}
                </Typography>
            }
        </Fragment>
    );
}

export default ButtonConnect;
