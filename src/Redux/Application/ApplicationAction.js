import axios from "axios"
import { apiRoot } from "../../Utils/config"

export function getParamByKey(key) {
    return async function(dispatch){
        const result = await axios.get(apiRoot.localApi + '/confparam/getParamByKey/'+key);
        console.log('ress', result.data)
        // dispatch({
        //     type: GET_ALL_NEWS,
        //     listNews: result.data
        // })
    }
}