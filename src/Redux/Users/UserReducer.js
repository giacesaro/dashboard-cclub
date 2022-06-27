import { GET_ALL_NEWS } from "./types";

export function userReducer(
    state = {
        listNews: []
    },
    action
) {
    switch (action.type) {
        case GET_ALL_NEWS:
            return Object.assign({}, state, {
                listNews: action.listNews
            });
        default:
            return state;
    }
}