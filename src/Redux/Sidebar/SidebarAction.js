import { SET_SECTION } from "./types"


export function setSection(value){
    return dispatch => {
        return dispatch({
            type: SET_SECTION,
            section: value
        })
    }
}