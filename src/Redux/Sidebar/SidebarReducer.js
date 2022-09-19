import { SET_SECTION } from "./types";


export function sidebarReducer(
    state = {
        section: 'home'
    }, action
) {
    switch (action.type) {
        case SET_SECTION:
            return Object.assign({}, state, {
                section: action.section
            });
        default:
            return state;
    }
}