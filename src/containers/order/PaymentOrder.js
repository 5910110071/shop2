import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

import { ordersFetch, orderDelete, ordersPaymentFetch } from '../../actions/'
import axios from "axios"
class PaymentOrder extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.ordersPaymentFetch()
        // axios.get("http://localhost:3002/orders").then(res =>{
        //     console.log("res.data",res.data)
        // })

    }
    showOrders() {
        return this.props.orderPayment && Array.isArray(this.props.orderPayment) && this.props.orderPayment.map(order => {
            const date = new Date(order.orderDate)
            return (
                <div key={order.id} className="col-md-4">
                    <div className="card mb-4">
                        <h5 className="text-center mt-2">วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                        {order.orders && order.orders.map(record => {
                            return (
                                <div key={record.product.product_id}>
                                    <img src={record.product.product_thumbnail} class="card-img-top img-thumbnail mb-2 mr-2 ml-2 " Style="width: 100px;" alt="..." />{record.product.product_name} x {record.quantity} = {record.product.product_price * record.quantity} บาท
                                </div>
                            )
                        })}
                        <p className="title text-right mr-2">ยอดรวม {order.totalPrice} บาท</p>
                        <div class="d-flex justify-content-end" >
                            <button className="btn btn-secondary btn-sm title mr-2 mb-2" onClick={() => this.delOrder(order)}>ยกเลิกรายการ</button>
                            <button className="btn btn-danger btn-sm title mr-2 mb-2" onClick={() => this.props.history.push('/paymentOrderConfirm/' + order.id)}>แจ้งชำระเงิน</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการที่ยังไม่ชำระเงิน</h1>
                    <div className="row">
                        {this.showOrders()}

                    </div>

                </div>
                <Footer />
            </div>

        )
    }
}
function mapStateToprops({ orderPayment }) {
    return { orderPayment }
}
export default withRouter(connect(mapStateToprops, { ordersPaymentFetch })(PaymentOrder))