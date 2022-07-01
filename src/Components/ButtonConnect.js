import React, { Fragment, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { providerOptions, connectors } from "../Utils/providerOptions";
import Web3Modal from "web3modal";
import { useWeb3React } from '@web3-react/core';

const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
});

function ButtonConnect() {
    const { activate, active } = useWeb3React();
    const [account, setAccount] = useState();
    const [error, setError] = useState("");

    const connectWallet = async () => {
        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            console.log('ttt', library.connection.url)
            switch (library.connection.url) {
                case 'metamask':
                    activate(connectors.injected)
                    break;
                case 'eip-1193:':
                    activate(connectors.walletConnect)
                    break;
                default:
                    break;
            }
            if (accounts) setAccount(accounts[0]);
            console.log('chain', network.chainId)
            console.log('provider', provider)
            console.log('library', library)
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Fragment>
            {!active &&
                <Button variant='outlined' className='h-10 border-my-black color-my-black' onClick={connectWallet}>
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
