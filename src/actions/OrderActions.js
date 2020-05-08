import axios from "axios"
import { ORDERS_FETCH, ORDER_ADD, ORDER_DELETE , ORDER_POST } from "./types"


export const ordersPost = ({orders,totalPrice}) => { // ตอนนี้ทุก order จะส่งมาที่เดียวกันเพราะยังมีการการ login เพื่อระบุตัวตน user
    return dispatch => {
        axios.post("http://localhost:3002/orders",{ orderDate: new Date(), totalPrice, orders }).then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง 
            res => {                                                            
                dispatch({ type: ORDER_POST, payload: res.data })
            }
        )
    }
}


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
