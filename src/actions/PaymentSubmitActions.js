import axios from "axios"
import { PAYMENT_POST , PAYMENT_FETCH  } from "./types"

export const paymentPost = values => { 
    return dispatch => {
        axios.post("http://localhost:3002/payments",values).then(
            res => {                                                            
                dispatch({ type: PAYMENT_POST })
            }
        )
    }
}

export const paymentFetch = () => { 
    return dispatch => {
        axios.get("http://localhost:3002/payments").then(
            res => {                                                            
                dispatch({ type: PAYMENT_FETCH , payload: res.data })
            }
        )
    }
}