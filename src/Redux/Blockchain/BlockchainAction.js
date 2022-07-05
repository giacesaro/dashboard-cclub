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

var smartContract = {};
var web3;
var provider;
var signer;

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

export function balanceOf(address) {
    return async (dispatch) => {
        try {
            smartContract.methods.balanceOf(address)
                .call().then(result => {
                    dispatch({
                        type: BALANCE_OF_SUCCESS,
                        balanceOf: result,
                    });
                }).catch(err => {
                    dispatch({
                        type: BALANCE_OF_FAILED,
                        errorBoolean: true,
                        errorMethod: err.message,
                    });
                });
        } catch (err) {
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

                //PRIMO TENTATIVO
                const response = await smartContract.mint(mintamount);
                // console.log(response)
                // const test = await fetch(response, {
                //     headers: {
                //       "Content-Type": "application/json",
                //       Accept: "application/json",
                //     }, //la fetch mi ritorna una risposta di http, quindi faccio .json() e recupero la risposta
                //   })
                  
                //   console.log(test)
                  
                //   .then(resultFetch => resultFetch.json()).catch(err => console.log(err => 'errr', err.message))
                //     .then(json => {
                //       //Aggiungo l'immagine dalla risposta alla mia lista
                //       let listImage = json.image
                //     }).catch(err => {
                //       console.log('errr', err.message)
                //     })
                console.log(response);

                dispatch(createUser(account, refCodeUsed, idPass))
                dispatch({
                    type: MINT_SUCCESS,
                    mint: response
                });
            } else {
                dispatch({
                    type: MINT_FAILED,
                    errorBoolean: true,
                    errorMethod: "Error: mintamount parameter too big."
                });
            }
        } catch (err) {
            console.log(err)
            dispatch({
                type: MINT_FAILED,
                errorBoolean: true,
                errorMethod: err.message
            });
        }
    };
};
