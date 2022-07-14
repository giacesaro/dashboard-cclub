import {
    SET_DATES_AND_COUNTS_CHART, SET_LOADING_CHARTS
} from "./types";


export function historyReducer(
    state = {
        datesChart: [],
        countsChart: [],
        loadingCharts: false
    },
    action
) {
    switch (action.type) {
        case SET_DATES_AND_COUNTS_CHART:
            return Object.assign({}, state, {
                datesChart: action.datesChart,
                countsChart: action.countsChart,
                loadingCharts: action.loadingCharts
            })
        case SET_LOADING_CHARTS:
            return Object.assign({}, state, {
                loadingCharts: action.loadingCharts
            })
        default:
            return state;
    }
}