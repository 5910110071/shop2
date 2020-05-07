import { ORDERS_FETCH, ORDER_ADD, ORDER_DELETE } from "../actions/types"
export default function (state = { totalPrice: 0, orders: [], confirm: false, msg: '' }, action) {
    switch (action.type) {
        case ORDERS_FETCH:
            return state
        case ORDER_ADD:
            let findOrder = state.orders.find(order => order.product.product_id == action.payload.product_id);
            if (findOrder) {
                findOrder.quantity++;
            } else {
                state.orders.push({ product: action.payload, quantity: 1 });
            }
            const totalPrice = state.totalPrice + parseInt(action.payload.product_price);
            // this.setState({
            //     totalPrice: totalPrice,
            //     orders: state.orders,
            //     confirm: false
            // });
            state = { totalPrice: totalPrice, orders: state.orders, confirm: false, msg: '' }
            console.log("Order", state)
            return state

        case ORDER_DELETE:
            let findOrder2 = state.orders.find(order => order.product.product_id == action.payload);
            if (findOrder2) {
                findOrder2.quantity--;
                const totalPrice = state.totalPrice - parseInt(findOrder2.product.product_price);
                if (findOrder2.quantity == 0) {
                    var array = [...state.orders];
                    var index = array.indexOf(findOrder2)
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                    console.log("state.orders", array)

                    //state.orders.remove(findOrder2)
                    state = { totalPrice: totalPrice, orders: array, confirm: false, msg: '' }

                }
                else
                    state = { totalPrice: totalPrice, orders: state.orders, confirm: false, msg: '' }



            }
            console.log("Order2", state)
            return state
        default: return state
    }
}