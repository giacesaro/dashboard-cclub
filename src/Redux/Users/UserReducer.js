import {
    CREATE_USER, GET_REFERRAL_CODE
} from "./types";

export function userReducer(
    state = {
        newUser: {},
        referralCode: ''
    },
    action
) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                newUser: action.newUser
            });
        case GET_REFERRAL_CODE:
            return Object.assign({}, state, {
                referralCode: action.referralCode
            });
        default:
            return state;
    }
}