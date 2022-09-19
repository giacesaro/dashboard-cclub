import Web3 from "web3";
import { createUser, updateNewPass } from "../Users/UserAction";
import Web3EthContract from "web3-eth-contract";
import {
    BALANCE_OF_FAILED,
    BALANCE_OF_SUCCESS,
    MINT_FAILED,
    MINT_SUCCESS,
    SET_ERROR_BLOCKCHAIN,
    SET_SUCCESS_BLOCKCHAIN,
    CONNECT_WALLET,
    DISCONNECT_WALLET,
    CHAIN_ID_FAILED
} from "./types";
import { ethers, providers } from "ethers";
import { providerOptions, connectors } from "../../Utils/providerOptions";
import Web3Modal from "web3modal";
import { setLoading } from "../Application/ApplicationAction";
import { contractElite, contractPartner, contractPremium } from "../../Utils/config";

var smartContract = {};
var provider;
var signer;
var abi = {}
var web3;

const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
    
});


export function connectAbi(contractAddress) {
    return async () => {
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        abi = await abiResponse.json();
        const { ethereum } = window;
        const walletIsInstalled = ethereum && (ethereum.isMetaMask || ethereum.isCoinbaseWallet);
        if (ethereum === null || ethereum === undefined || walletIsInstalled) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            web3 = new Web3(provider); //https://bsc-dataseed1.binance.org
            signer = provider.getSigner();
            smartContract = new ethers.Contract(contractAddress, abi, signer)
        } else {
            Web3EthContract.setProvider(ethereum);
            web3 = new Web3(ethereum);
            smartContract = new Web3EthContract(
                abi,
                contractAddress
            );
        }
    }
}

export function connectWallet(activate, contractAddress) {
    return async (dispatch) => {
        try {
            const instance  = await web3Modal.connect();
            provider  = await new providers.Web3Provider(instance);
            signer = provider.getSigner();
            console.log('istance',instance)
            console.log('provider',provider)
            console.log('providerNet',provider._network)
            console.log('web3',web3)
            var chainId = web3.eth.getChainId;
            if (chainId !== 4){
                dispatch({
                    type: CHAIN_ID_FAILED,
                    errorBoolean: true,
                    errorMessage: "Change to Rinkeby network!",
                });
            }
             console.log('library conn', provider.connection)
            switch (provider.connection.url) {
                case 'metamask':
                    activate(connectors.injected)
                    break;
                case 'eip-1193:':
                    activate(connectors.walletConnect)
                    break;
                case 'https://rinkeby-infura.wallet.coinbase.com': //TODO sistemare
                    activate(connectors.coinbaseWallet)
                default:
                    break;
            }
            // if (accounts) {
            //     connectAbi(contractAddress);
            // }
            dispatch({
                type: CONNECT_WALLET
            });
        } catch (error) {
            console.error('connectWallet - Error: ', error)
        }
    }
};

export function disconnectWeb3Modal(deactivate) {
    return (dispatch) => {
        deactivate();
        web3Modal.clearCachedProvider();
        dispatch({
            type: DISCONNECT_WALLET
        });
    };
};

export function balanceOf(address) {
    return async (dispatch) => {
        try {
            if (Object.keys(smartContract).length !== 0) {
                const balanceOf = await smartContract.balanceOf(address);
                dispatch({
                    type: BALANCE_OF_SUCCESS,
                    balanceOf: balanceOf,
                });
            }
        } catch (err) {
            console.error('balanceOf - Error: ', err)
            dispatch({
                type: BALANCE_OF_FAILED,
                errorBoolean: true,
                errorMessage: err.message,
            });
        }
    };
};

export function mint(mintamount, account, refCodeUsed, idPass, userLogged) {
    return async (dispatch) => {
        try {
            if (mintamount === 1) {
                switch (idPass) {
                    case 1:
                        smartContract = new ethers.Contract(contractPartner, abi, signer)
                        break;
                    case 2:
                        smartContract = new ethers.Contract(contractElite, abi, signer)
                        break;
                    case 3:
                        smartContract = new ethers.Contract(contractPremium, abi, signer)
                        break;
                    default:
                        break;
                }
                const transaction = await smartContract.mint(mintamount);
                //USO IL WAIT PER ATTENDERE CHE LA TRANSAZIONE SI CONCLUDA
                transaction.wait().then(result => {
                    //CONTROLLO SE L'UTENTE HA GIA' ACQUISTATO UN PASS. SE NON LO POSSIEDE
                    //FACCIO LA CREATE, ALTRIMENTI UPDATE
                    if (Object.keys(userLogged).length === 0) {
                        dispatch(createUser(account, refCodeUsed, idPass));
                    } else {
                        dispatch(updateNewPass(account, refCodeUsed, idPass));
                    }
                    dispatch(setLoading(false, '', false));
                    dispatch({
                        type: MINT_SUCCESS,
                        mint: result,
                        success: true,
                        successMessage: 'Pass Purchased!'
                    });
                })
            } else {
                dispatch(setLoading(false, '', false));
                dispatch({
                    type: MINT_FAILED,
                    errorBoolean: true,
                    errorMessage: "Error: mintamount parameter too big."
                });
            }
        } catch (err) {
            dispatch(setLoading(false, '', false));
            console.error('Min - Error: ', err)
            dispatch({
                type: MINT_FAILED,
                errorBoolean: true,
                errorMessage: err.message
            });
        }
    };
};

export function setErrorBoolean(errorBoolean = false, errorMessage = '') {
    return (dispatch) => {
        dispatch({
            type: SET_ERROR_BLOCKCHAIN,
            errorBoolean: errorBoolean,
            errorMessage: errorMessage
        });
    }
}

export function setSuccess(success = false, successMessage = '') {
    return (dispatch) => {
        dispatch({
            type: SET_SUCCESS_BLOCKCHAIN,
            success: success,
            successMessage: successMessage
        });
    }
}