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

var smartContract = {};

export function connectAbi() {
    return async () => {
        var contractAddress = contractTest;  //TODO cambniare con nuovo smartContract
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        debugger
        const abi = await abiResponse.json();
        const { ethereum } = window;
        const walletIsInstalled = ethereum && (ethereum.isMetaMask || ethereum.isCoinbaseWallet);
        var web3;
        if (ethereum === null || ethereum === undefined || walletIsInstalled) {
            web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/6a2daf18fc2d42e187e35eeb749e206c")); //https://bsc-dataseed1.binance.org
            smartContract = new web3.eth.Contract(abi, contractAddress)
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
                smartContract.methods.mint(mintamount)
                    .call({
                        value: 0,
                        to: "0x714b73eB6FD84A0B609bE9278C2d5e79ED508d15", //TODO cambiare con nuovo contratto
                        from: account
                    }).then(result => {
                        dispatch(createUser(account, refCodeUsed, idPass))
                        dispatch({
                            type: MINT_SUCCESS,
                            mint: result
                        });
                    }).catch(err => {
                        dispatch({
                            type: MINT_FAILED,
                            errorBoolean: true,
                            errorMethod: err.message
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
            console.log(err)
            dispatch({
                type: MINT_FAILED,
                errorBoolean: true,
                errorMethod: err.message
            });
        }
    };
};
