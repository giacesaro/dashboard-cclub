import axios from "axios"
import { apiRoot } from "../../Utils/config"
import {
    SET_DATES_AND_COUNTS_CHART, SET_LOADING_CHARTS
} from "./types";


export function getHistoryCountAndFind() {
    return async function (dispatch) {
        const result = await axios.get(apiRoot.localApi + '/history/getHistoryCountAndFind');
        dispatch({
            type: SET_DATES_AND_COUNTS_CHART,
            datesChart: result.data.dates,
            countsChart: result.data.counts,
            loadingCharts: false
        })
    }
}

export function setDatesAndCounts(dates = [], counts = []){
    return function (dispatch) {
        dispatch({
            type: SET_DATES_AND_COUNTS_CHART,
            datesChart: dates,
            countsChart: counts,
            loadingCharts: false
        })
    }
}

export function setLoadingCharts(loadingCharts = false){
    return (dispatch) => {
        dispatch({
            type: SET_LOADING_CHARTS,
            loadingCharts: loadingCharts
        })
    }
}