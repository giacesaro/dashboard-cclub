import {
    CREATE_USER,
    GET_USER_BY_WALLET
} from "./types";

export function userReducer(
    state = {
        newUser: {},
        referralCode: '',
        user: {}
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
                user: action.user
            });
        default:
            return state;
    }
}