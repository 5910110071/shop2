import { ORDER_PAYMENT_FETCH } from "../actions/types"
export default function (state = [], action) {
    switch (action.type) {
        case ORDER_PAYMENT_FETCH:
            return action.payload
        default: return state
    }
}