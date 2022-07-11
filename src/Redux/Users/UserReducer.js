import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS
} from "./types";

export function userReducer(
    state = {
        newUser: {},
        referralCode: '',
        userLogged: {}
    },
    action
) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                newUser: action.newUser
            });
        case GET_USER_BY_WALLET:
            return Object.assign({}, state, {
                referralCode: action.referralCode,
                userLogged: action.userLogged
            });
        case UPDATE_NEW_PASS:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
}