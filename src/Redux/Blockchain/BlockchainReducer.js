import {
    BALANCE_OF_FAILED,
    BALANCE_OF_SUCCESS,
    CHAIN_ID_FAILED,
    CONNECT_WALLET,
    MINT_FAILED,
    MINT_SUCCESS,
    SET_ERROR_BLOCKCHAIN,
    SET_SUCCESS_BLOCKCHAIN,
    TOTAL_SUPPLY_SUCCESS
} from "./types";

export function blockchainReducer(
    state = {
        balanceOf: {},
        errorBoolean: false,
        errorMessage: '',
        mint: {},
        success: false,
        successMessage: '',
        balanceOfPartner: 0,
        balanceOfElite: 0,
        balanceOfPremium: 0,
        totalSupplyPartner: 0,
        totalSupplyElite: 0,
        totalSupplyPremium: 0
    },
    action
) {
    switch (action.type) {
        case BALANCE_OF_SUCCESS:
            return Object.assign({}, state, {
                balanceOfPartner: action.balanceOfPartner,
                balanceOfElite: action.balanceOfElite,
                balanceOfPremium: action.balanceOfPremium
            })
        case BALANCE_OF_FAILED:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMessage: action.errorMessage
            });
        case MINT_SUCCESS:
            return Object.assign({}, state, {
                mint: action.mint,
                success: action.success,
                successMessage: action.successMessage
            });
        case MINT_FAILED:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMessage: action.errorMessage
            });
        case SET_ERROR_BLOCKCHAIN:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMessage: action.errorMessage
            });
        case SET_SUCCESS_BLOCKCHAIN:
            return Object.assign({}, state, {
                success: action.success,
                successMessage: action.successMessage
            });
        case CONNECT_WALLET:
            return Object.assign({}, state, {
            });
        case CHAIN_ID_FAILED:
            return Object.assign({}, state, {
                errorBoolean: action.errorBoolean,
                errorMessage: action.errorMessage
            });
        case TOTAL_SUPPLY_SUCCESS:
            return Object.assign({}, state, {
                totalSupplyPartner: action.totalSupplyPartner,
                totalSupplyElite: action.totalSupplyElite,
                totalSupplyPremium: action.totalSupplyPremium
            })
        default:
            return state;
    }
}