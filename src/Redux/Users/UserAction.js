import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CREATE_USER
} from "./types"


export function createUser(account, refCodeUsed, idPass) {
    return async function (dispatch) {
        const result = await axios.post(apiRoot.localApi + '/user/', {wallet: account, referralCode: refCodeUsed, idPass: idPass})
        dispatch({
            type: CREATE_USER,
            newUser: result.data
        })
    }
}

export function getUserById() {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/user/getUserbyId/83')
       console.log('res',result)
    }
}