import { GET_ALL_PASS, GET_PARAM_BY_KEY } from "./types";


export function applicationReducer(
    state = {
        configPasses: [],
        params: {}
    },
    action
) {
    switch (action.type) {
        case GET_PARAM_BY_KEY:
            return Object.assign({}, state, {
                params: action.params
            })
        case GET_ALL_PASS:
            return Object.assign({}, state, {
                configPasses: action.configPasses
            });
        default:
            return state
    }
}