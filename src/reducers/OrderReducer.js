import {  ORDERS_WAIT_PAYMENT, ORDERS_PAYMENT, ORDER_PAYMENT_FETCH, ORDER_RESET, ORDERS_PAID, ORDERS_PAID_DELETE ,ORDERS_PAYMENT_STATUS_UPDATE } from "../actions/types"
export default function (state = { totalPrice: 0, orders: [], confirm: false, msg: '' }, action) {
    switch (action.type) {
    
        case ORDERS_WAIT_PAYMENT:
            let resultOrder2 = action.payload.filter(order => order.status == "รอชำระเงิน");
            //state = { totalPrice: 0, orders: [], saved: true, msg: "บันทึกสินค้าเรียบร้อย" }
            if(resultOrder2)
                return resultOrder2
            else
                return state
        // return action.payload

        case ORDERS_PAID:
            let resultOrder3 = action.payload.filter(order => order.status == "ชำระเงินแล้ว" || order.status == "ข้อมูลการชำระเงินถูกต้อง" || order.status == "สินค้ากำลังจัดส่ง" || order.status == "สินค้าจัดส่งสำเร็จ");
            //state = { totalPrice: 0, orders: [], saved: true, msg: "บันทึกสินค้าเรียบร้อย" }
            return resultOrder3

        case ORDERS_PAID_DELETE:
            let resultOrder4 = action.payload.filter(order => order.status == "รอชำระเงิน");
            return resultOrder4

        case ORDERS_PAYMENT:
            return { totalPrice: 0, orders: [], saved: true, msg: "บันทึกสินค้าเรียบร้อย" }

        case ORDER_PAYMENT_FETCH:
            return action.payload
        case ORDER_RESET:
            return { totalPrice: 0, orders: [], confirm: false, msg: '' }
       
        default: return state
    }
}