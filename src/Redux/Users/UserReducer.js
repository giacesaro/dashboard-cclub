import {
    CREATE_USER,
    GET_USER_BY_WALLET,
    UPDATE_NEW_PASS,
    GET_REFERRAL_MOVEMENT,
    SET_REFERRAL_BY_LINK
} from "./types";

export function userReducer(
    state = {
        newUser: {},
        referralCode: '',
        userLogged: {},
        refMovement: {},
        referralFromLink: ''
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
        case SET_REFERRAL_BY_LINK:
            return Object.assign({}, state, {
                referralFromLink: action.referralFromLink
            });
        default:
            return state;
    }
}