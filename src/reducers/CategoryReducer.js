import { CATEGORIES_FETCH } from "../actions/types"
export default function (state = [], action) {
    switch (action.type) {
        case CATEGORIES_FETCH:
            return action.payload
        default:
            return state // ค่าเดิม
    }
}