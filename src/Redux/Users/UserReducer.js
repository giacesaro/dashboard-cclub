import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS,
    GET_REFERRAL_MOVEMENT
} from "./types";

export function userReducer(
    state = {
        newUser: {},
        referralCode: '',
        userLogged: {},
        refMovement: {},
    },
    action
) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                newUser: action.newUser,
                userLogged: action.userLogged
            });
        case GET_USER_BY_WALLET:
            return Object.assign({}, state, {
                referralCode: action.referralCode,
                userLogged: action.userLogged
            });
        case UPDATE_NEW_PASS:
            return Object.assign({}, state, {
                userLogged: action.userLogged
            });
        case GET_REFERRAL_MOVEMENT:
            return Object.assign({}, state, {
                refMovement: action.refMovement
            });
        default:
            return state;
    }
}