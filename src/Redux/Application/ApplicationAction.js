import axios from "axios"
import { apiRoot } from "../../Utils/config"
import { ELITE_CONFIG, GET_ALL_PASS, GET_PARAM_BY_KEY, PARTNER_CONFIG, PREMIUM_CONFIG } from "./types";

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