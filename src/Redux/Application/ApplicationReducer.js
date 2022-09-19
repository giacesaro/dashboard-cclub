import {
    GET_ALL_PASS,
    GET_PARAM_BY_KEY,
    SET_LOADING
} from "./types";


export function applicationReducer(
    state = {
        configPasses: [],
        params: {},
        loading: false,
        message: '',
        loadingWarning: false
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
        case SET_LOADING:
            return Object.assign({}, state, {
                loading: action.loading,
                message: action.message,
                loadingWarning: action.loadingWarning
            });
        default:
            return state
    }
}