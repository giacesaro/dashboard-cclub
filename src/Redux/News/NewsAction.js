import axios from "axios"
import { apiRoot } from "../../Utils/config"


export function getAllNews() {
    return async function(dispatch) {
        const result = await axios.get(apiRoot.localApi + '/news/getAllNews')
        console.log('resui', result)
    }
}