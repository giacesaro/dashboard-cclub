import Web3 from "web3";
import { contractTest } from "../../Utils/config";
import { createUser } from "../Users/UserAction";
import Web3EthContract from "web3-eth-contract";
import {
    BALANCE_OF_FAILED,
    BALANCE_OF_SUCCESS,
    MINT_FAILED,
    MINT_SUCCESS
} from "./types";
import { ethers } from "ethers";
import { providerOptions, connectors } from "../../Utils/providerOptions";
import Web3Modal from "web3modal";
import { useWeb3React } from "@web3-react/core";

var smartContract = {};
var web3;
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

export const connectWallet = async (activate) => {
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
        if (accounts){
            connectAbi();
        }
    } catch (error) {
        //setError(error);
    }
};

export function balanceOf(address) {
    return async (dispatch) => {
        try {
            console.log(smartContract)
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
                errorMethod: err.message,
            });
        }
    };
};

export function mint(mintamount, account, refCodeUsed, idPass) {
    return async (dispatch) => {
        debugger
        try {
            if (mintamount === 1) {
                const transaction = await smartContract.mint(mintamount);
                //USO IL WAIT PER ATTENDERE CHE LA TRANSAZIONE SI CONCLUDA
                transaction.wait().then(result => {
                    dispatch(createUser(account, refCodeUsed, idPass))
                    dispatch({
                        type: MINT_SUCCESS,
                        mint: result
                    });
                })
            } else {
                dispatch({
                    type: MINT_FAILED,
                    errorBoolean: true,
                    errorMethod: "Error: mintamount parameter too big."
                });
            }
        } catch (err) {
            console.error('Min - Error: ', err)
            dispatch({
                type: MINT_FAILED,
                errorBoolean: true,
                errorMethod: err.message
            });
        }
    };
};
