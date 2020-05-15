import { PAYMENT_POST, PAYMENT_FETCH } from "../actions/types"
export default function (state = [], action) {
    switch (action.type) {
        case PAYMENT_POST:
            return { msg: "ส่งคำสั่งชื่อเรีนบร้อยแล้ว" }
        case PAYMENT_FETCH:
            return action.payload
        default: return state
    }
}