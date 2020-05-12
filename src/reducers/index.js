import {combineReducers} from "redux"
import {reducer as reduxForm} from "redux-form"
import ProductReducer from "./ProductReducer"
import OrderReducer from "./OrderReducer"
import CategoryReducer from "./CategoryReducer"
import OrderPaymentReducer from "./OrderPaymentReducer"
import PaymentSubmitReducer from "./PaymentSubmitReducer"
const rootRuducer  = combineReducers({
    orders : OrderReducer,
    products : ProductReducer,
    categories : CategoryReducer,
    orderPayment : OrderPaymentReducer,
    payments : PaymentSubmitReducer,
    form : reduxForm
})
export default rootRuducer