import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    CONFIG_PASS_ELITE,
    CONFIG_PASS_PARTNER,
    CONFIG_PASS_PREMIUM,
    ELITE_CONFIG,
    GET_ALL_PASS,
    GET_CONFIG_PASS_ACTIVE,
    GET_PARAM_BY_KEY,
    PARTNER_CONFIG,
    PREMIUM_CONFIG,
    SET_LOADING
} from "./types";

export function getParamByKey(key) {
    return async function (dispatch) {
        var result = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + key);
        dispatch({
            type: GET_PARAM_BY_KEY,
            params: result.data
        });
    }
}

export function getAllPassConfig() {
    return async function (dispatch) {
        var partnerConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + PARTNER_CONFIG);
        var eliteConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + ELITE_CONFIG);
        var premiumConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + PREMIUM_CONFIG);
        var configPasses = []
        configPasses.push(partnerConfig.data, eliteConfig.data, premiumConfig.data);
        dispatch({
            type: GET_ALL_PASS,
            configPasses: configPasses
        });
    }
}

export function getAllPassActiveConfig() {
    return async function (dispatch) {
        var partnerConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + CONFIG_PASS_PARTNER);
        var eliteConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + CONFIG_PASS_ELITE);
        var premiumConfig = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/' + CONFIG_PASS_PREMIUM);
        var configPasses = []
        configPasses.push(partnerConfig.data, eliteConfig.data, premiumConfig.data);
        dispatch({
            type: GET_CONFIG_PASS_ACTIVE,
            configActiveInactive: configPasses
        });
    }
}

export function setLoading(loading = true, message = '', loadingWarning = true) {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            loading: loading,
            message: message,
            loadingWarning: loadingWarning
        });
    }
}