import React, { Fragment, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import HelloCard from './HomeComponents/HelloCard';
import { ethers } from 'ethers';
import { providerOptions, connectors } from "../Utils/providerOptions";
import Web3Modal from "web3modal";
import { useWeb3React } from '@web3-react/core';

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

function ButtonConnect() {
    const { activate } = useWeb3React();
    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [network, setNetwork] = useState();
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();

    const connectWallet = async () => {
        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
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
            setChainId(network.chainId);
            console.log('chain', network.chainId)
            console.log('provider', provider)
            console.log('library', library)
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Fragment>
        {!account && 
        <Button variant='outlined' className='h-10 border-my-black color-my-black' onClick={connectWallet}>
            CONNECT WALLET
        </Button>
        }
        {account &&
            <Typography variant='body1' className='h-10 font-Roboto !text-lg !font-medium'>
                {account}
            </Typography>
        }
        </Fragment>
    );
}

export default ButtonConnect;
