import axios from "axios"
import { ORDER_PAYMENT_FETCH } from "./types"

export const orderPaymentFetch = () => { // ตอนนี้ทุก order จะส่งมาที่เดียวกันเพราะยังมีการการ login เพื่อระบุตัวตน user
    return dispatch => {
        axios.get("http://localhost:3002/orders").then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง 
            res => {                                                            
                dispatch({ type: ORDER_PAYMENT_FETCH, payload: res.data })
            }
        )
    }
}
