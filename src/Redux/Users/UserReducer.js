import {
    CREATE_USER
} from "./types";

export function userReducer(
    state = {
        newUser: {}
    },
    action
) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                newUser: action.newUser
            });
        default:
            return state;
    }
}