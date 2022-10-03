import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS,
    GET_REFERRAL_MOVEMENT,
    SET_REFERRAL_BY_LINK
} from "./types"
import { crypt, decrypt, secretKey } from "../../Crypto/Crypto.js"


export function createUser(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        let stringData = { wallet: account, referralCode: refCodeUsed, idPass: idPass }
        let data = {data: crypt(secretKey,JSON.stringify(stringData))};
        const result = await axios.post(apiRoot.localApi + '/user/', data);
        dispatch({
            type: CREATE_USER,
            newUser: result.data,
            userLogged: result.data,
        })
    }
}

export function getUserByWallet(wallet) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/user/getUserByWallet/' + wallet);
        //SE IL WALLET E' GIA' REGISTRATO, VADO A RECUPERARE ANCHE I MOVIMENTI DALLA TABELLA
        if (Object.keys(result.data).length !== 0) {
            const resultRefMovement = await axios.get(apiRoot.localApi + '/referralmovement/getReferralMovementByIdUserRef/' + result.data.id);
            //VADO A CALCOLARE ANCHE I PASS COMPRATI COL MIO REFERRAL
            let refUsed = 0;
            if (Object.keys(resultRefMovement).length !== 0) {
                let data = resultRefMovement.data;
                refUsed = parseInt(data.partnerSelled) + parseInt(data.eliteSelled) + parseInt(data.premiumSelled);
                // passConf.forEach(element => {
                //     refUsed = refUsed + element.passPosseduti;
                // });
            }
            dispatch({
                type: GET_REFERRAL_MOVEMENT,
                refMovement: resultRefMovement.data,
                refUsed: refUsed
            })
        }
        dispatch({
            type: GET_USER_BY_WALLET,
            userLogged: result.data,
            referralCode: result.data.referralCode
        })
    }
}

export function updateNewPass(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        let stringData = { wallet: account, referralCode: refCodeUsed, idPass: idPass }
        let data = {data: crypt(secretKey,JSON.stringify(stringData))};
        const result = await axios.post(apiRoot.localApi + '/user/updateNewPass', data);
        dispatch({
            type: UPDATE_NEW_PASS,
            userLogged: result.data,
        })
    }
}

export function getReferralMovementByIdUserRef(idUserRef) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/referralmovement/getReferralMovementByIdUserRef/' + idUserRef);
        dispatch({
            type: GET_REFERRAL_MOVEMENT,
            refMovement: result.data,
        })
    }
}

export function setReferralByLink(referral) {
    return function (dispatch) {
        dispatch({
            type: SET_REFERRAL_BY_LINK,
            referralFromLink: referral
        })
    }
}