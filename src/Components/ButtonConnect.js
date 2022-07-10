import React, { Fragment, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { providerOptions, connectors } from "../Utils/providerOptions";
import Web3Modal from "web3modal";
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { connectWallet } from '../Redux/Blockchain/BlockchainAction';
import '../CSS/Dashboard.css'

const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
});

function ButtonConnect() {
    const { activate, active, account } = useWeb3React();
    //const [account, setAccount] = useState();
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleConnect = () => {
        dispatch(connectWallet(activate))
    };

    return (
        <Fragment>
            {!active &&
                <Button variant='outlined' className='h-10 border-my-black color-my-black' onClick={handleConnect}>
                    CONNECT WALLET
                </Button>
            }
            {active &&
                <Typography variant='body1' className='h-10 font-openSans-light !text-lg !font-medium'>
                    {account}
                </Typography>
            }
        </Fragment>
    );
}

export default ButtonConnect;
