import axios from "axios"
import { ORDERS_FETCH, ORDER_ADD, ORDER_DELETE } from "./types"
/*
export const ordersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data })
            }
        )
    }
}
*/
export const ordersFetch = () => {
    return dispatch => {
            dispatch({ type: ORDERS_FETCH})
    }
}
/*export const orderDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/" + id).then(
            res => {
                axios.get("http://localhost:3001/orders").then(
                    res => {
                        dispatch({ type: ORDERS_FETCH, payload: res.data })
                    }
                )
            }
        )
    }
}
*/

export const orderAdd = (product) => {
    return dispatch => {
        dispatch({ type: ORDER_ADD, payload: product })
    }
}

export const orderDelete = id => {
    return dispatch => {
        dispatch({ type: ORDER_DELETE, payload: id })
    }
}



/*
export const orderPost = (orders) => {
    return dispatch => {
        axios.post("http://localhost:3002/orders",{ orderDate: new Date(), totalPrice, orders }).then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data })
            }
        )
    }
}
*/
