import {
    BALANCE_OF_FAILED,
    BALANCE_OF_SUCCESS,
    MINT_FAILED,
    MINT_SUCCESS
} from "./types";

export function blockchainReducer(
    state = {
        balanceOf: {},
        errorBoolean: false,
        errorMethod: '',
        mint: {}
    },
    action
) {
    switch (action.type) {
        case BALANCE_OF_SUCCESS:
            return Object.assign({}, state, {
                balanceOf: action.balanceOf
            })
        case BALANCE_OF_FAILED:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMethod: action.errorMethod
            });
        case MINT_SUCCESS:
            return Object.assign({}, state, {
                mint: action.mint
            });
        case MINT_FAILED:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMethod: action.errorMethod
            });
        default:
            return state;
    }
}