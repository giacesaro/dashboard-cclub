import axios from "axios"
import { apiRoot } from "../../Utils/config"
import { GET_ALL_NEWS } from "./types"


export function getAllNews() {
    return async function(dispatch) {
        const result = await axios.get(apiRoot.localApi + '/news/getAllNews')
        dispatch({
            type: GET_ALL_NEWS,
            listNews: result.data
        })
    }
}