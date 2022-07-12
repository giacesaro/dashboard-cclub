import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS,
    GET_REFERRAL_MOVEMENT
} from "./types"


export function createUser(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        const result = await axios.post(apiRoot.localApi + '/user/', {wallet: account, referralCode: refCodeUsed, idPass: idPass});
        dispatch({
            type: CREATE_USER,
            newUser: result.data,
            userLogged: result.data,
        })
    }
}

// export function getUserById(id) {
//     return async function (dispatch) {
//         const result = await axios.get(apiRoot.localApi + '/user/getUserbyId/'+id)
//        //console.log('res',result)
//     }
// }

export function getUserByWallet(wallet) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/user/getUserByWallet/'+wallet);
        console.log('ressss', result)
        //SE IL WALLET E' GIA' REGISTRATO, VADO A RECUPERARE ANCHE I MOVIMENTI DALLA TABELLA
        if (Object.keys(result.data).length !== 0) {
            const resultRefMovement = await axios.get(apiRoot.localApi + '/referralmovement/getReferralMovementByIdUserRef/' + result.data.id);
            console.log('refmove', resultRefMovement)
            dispatch({
                type: GET_REFERRAL_MOVEMENT,
                refMovement: resultRefMovement.data,
            })
        }
        dispatch({
            type: GET_USER_BY_WALLET,
            userLogged: result.data,
            referralCode: result.data.referralCode
        })
    }
}

// export function updateUser(id) {
//     return async function (dispatch) {
//         const result = await axios.patch(apiRoot.localApi + '/user/updateUser/'+id);
//         dispatch({
//             type: GET_USER_BY_WALLET,
//             userLogged: result.data,
//             referralCode: result.data.referralCode
//         })
//     }
// }

export function updateNewPass(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        const result = await axios.post(apiRoot.localApi + '/user/updateNewPass',  {wallet: account, referralCode: refCodeUsed, idPass: idPass});
        console.log('ressss Update', result)
        dispatch({
            type: UPDATE_NEW_PASS,
            userLogged: result.data,
        })
    }
}

export function getReferralMovementByIdUserRef(idUserRef) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/referralmovement/getReferralMovementByIdUserRef/'+idUserRef);
        console.log('refmove', result)
        dispatch({
            type: GET_REFERRAL_MOVEMENT,
            refMovement: result.data,
        })
    }
}