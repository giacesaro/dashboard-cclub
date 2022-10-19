import {
    GET_ALL_PASS,
    GET_CONFIG_PASS_ACTIVE,
    GET_PARAM_BY_KEY,
    SET_LOADING
} from "./types";


export function applicationReducer(
    state = {
        configPasses: [],
        params: {},
        loading: false,
        message: '',
        loadingWarning: false,
        configActiveInactive: []
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
        case GET_CONFIG_PASS_ACTIVE:
            return Object.assign({}, state, {
                configActiveInactive: action.configActiveInactive
            })
        default:
            return state
    }
}