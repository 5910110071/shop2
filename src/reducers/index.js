import {combineReducers} from "redux"
import {reducer as reduxForm} from "redux-form"
import ProductReducer from "./ProductReducer"
import OrderReducer from "./OrderReducer"
import CategoryReducer from "./CategoryReducer"
import OrderPaymentReducer from "./OrderPaymentReducer"

const rootRuducer  = combineReducers({
    orders : OrderReducer,
    products : ProductReducer,
    categories : CategoryReducer,
    orderPayment : OrderPaymentReducer,
    form : reduxForm
})
export default rootRuducer