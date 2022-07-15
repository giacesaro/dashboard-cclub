import Web3 from "web3";
import { contractTest } from "../../Utils/config";
import { createUser, updateNewPass } from "../Users/UserAction";
import Web3EthContract from "web3-eth-contract";
import {
    BALANCE_OF_FAILED,
    BALANCE_OF_SUCCESS,
    MINT_FAILED,
    MINT_SUCCESS,
    SET_ERROR_BLOCKCHAIN,
    SET_SUCCESS_BLOCKCHAIN,
    CONNECT_WALLET
} from "./types";
import { ethers } from "ethers";
import { providerOptions, connectors } from "../../Utils/providerOptions";
import Web3Modal from "web3modal";
import { setLoading } from "../Application/ApplicationAction";

var smartContract = {};
var provider;
var signer;

const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
});

export function connectAbi() {
    return async () => {
        var contractAddress = contractTest;  //TODO cambniare con nuovo smartContract
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const abi = await abiResponse.json();
        const { ethereum } = window;
        const walletIsInstalled = ethereum && (ethereum.isMetaMask || ethereum.isCoinbaseWallet);
        var web3;

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

export function connectWallet(activate) {
    return async (dispatch) => {
        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            // const network = await library.getNetwork();
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
            if (accounts) {
                connectAbi();
            }
            dispatch({
                type: CONNECT_WALLET
            });
        } catch (error) {
            //setError(error);
        }
    }
};

export function disconnectWeb3Modal(deactivate) {
    deactivate();
    web3Modal.clearCachedProvider();
  };

export function balanceOf(address) {
    return async (dispatch) => {
        try {
            console.log(smartContract)
            console.log('ad', address)
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
                const transaction = await smartContract.mint(mintamount);
                //USO IL WAIT PER ATTENDERE CHE LA TRANSAZIONE SI CONCLUDA
                transaction.wait().then(result => {
                    //CONTROLLO SE L'UTENTE HA GIA' ACQUISTATO UN PASS. SE NON LO POSSIEDE
                    //FACCIO LA CREATE, ALTRIMENTI UPDATE
                    console.log(userLogged)
                    if (Object.keys(userLogged).length === 0) {
                        dispatch(createUser(account, refCodeUsed, idPass));
                    } else {
                        dispatch(updateNewPass(account, refCodeUsed, idPass));
                    }
                    dispatch(setLoading(false));
                    dispatch({
                        type: MINT_SUCCESS,
                        mint: result,
                        success: true,
                        successMessage: 'Pass Purchased!'
                    });
                })
            } else {
                dispatch(setLoading(false));
                dispatch({
                    type: MINT_FAILED,
                    errorBoolean: true,
                    errorMessage: "Error: mintamount parameter too big."
                });
            }
        } catch (err) {
            dispatch(setLoading(false));
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