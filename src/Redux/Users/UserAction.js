import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CREATE_USER,
    GET_USER_BY_WALLET
} from "./types"


export function createUser(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        const result = await axios.post(apiRoot.localApi + '/user/', {wallet: account, referralCode: refCodeUsed, idPass: idPass});
        dispatch({
            type: CREATE_USER,
            newUser: result.data
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
        console.log(wallet)
        const result = await axios.get(apiRoot.localApi + '/user/getUserByWallet/'+wallet);
        console.log('ressss', result)
        dispatch({
            type: GET_USER_BY_WALLET,
            user: result.data,
            referralCode: result.data.referralCode
        })
    }
}