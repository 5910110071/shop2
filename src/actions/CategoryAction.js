import axios from "axios"
import { CATEGORIES_FETCH } from "./types"

export const categoriesFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/categories").then(
            res => {
                dispatch({ type: CATEGORIES_FETCH, payload: res.data })
            }
        )
    }
}
