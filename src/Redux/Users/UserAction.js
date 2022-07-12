import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS
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

export function getUserById(id) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/user/getUserbyId/'+id)
       //console.log('res',result)
    }
}

export function getUserByWallet(wallet) {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/user/getUserByWallet/'+wallet);
        console.log('ressss', result)
        dispatch({
            type: GET_USER_BY_WALLET,
            userLogged: result.data,
            referralCode: result.data.referralCode
        })
    }
}

export function updateUser(id) {
    return async function (dispatch) {
        const result = await axios.patch(apiRoot.localApi + '/user/updateUser/'+id);
        console.log('ressss', result)
        dispatch({
            type: GET_USER_BY_WALLET,
            userLogged: result.data,
            referralCode: result.data.referralCode
        })
    }
}

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