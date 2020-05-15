import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
import { ordersFetch, orderDelete, ordersPost, orderCancel } from '../../actions'


class Order extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.ordersFetch()
    }

    cancelOrder(product) {
        console.log("cancelOrder", product)
        this.props.orderCancel(product)
    }

    showOrders2(orders) {
        if (!orders || orders.length == 0) {
            return <h4 className=" text-muted title col-12">ยังไม่ได้เลือกสินค้า</h4>
        } else {
            return orders.map(order => {
                return (
                    <div key={order.product_id} class="col-3 text-right text-success title">
                        <div class="card" >
                            <img src={order.product.product_thumbnail} class="card-img-top" alt="..." />
                            <div class="d-flex justify-content-between mt-2 ml-2 mr-2">
                                <h6 class="card-title">{order.product.product_name} x {order.quantity} = {order.product.product_price * order.quantity} บาท </h6>

                                <button className="btn btn-sm btn-secondary mb-2 " onClick={() => this.cancelOrder(order.product)} >X</button>
                            </div>
                        </div>
                    </div>

                )
            })
        }
    }

    confirmOrder() {
        const { totalPrice, orders } = this.props.orders
        if (orders && orders.length > 0) {
            this.props.ordersPost(this.props.orders)
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h2 className="text-center">รายการสั่งซื้อ</h2>
                    
                    

                    <div class="row">
                        {this.showOrders2(this.props.orders.orders)}
                    </div>
                    <h3 className="text-right mt-2"> ยอดรวม : {this.props.orders.totalPrice} บาท</h3>
                    <div className = "d-flex flex-row-reverse bd-highlight">
                        {/* <h1 className="text-right"> ยอดรวม : {this.props.orders.totalPrice}</h1> */}
                        <button className="btn btn-danger title" onClick={() => this.confirmOrder()} >ยืนยันคำสั่งซื้อ</button>
                        {/* <button className="btn  btn-secondary title" onClick={() => this.props.onCancelOrder()} >ยกเลิก</button> */}
                    </div>

                </div>

                <Footer />
            </div>
        );
    }

}
function mapStateToProps({ orders }) {
    console.log("orders", orders)
    return { orders }
}
export default connect(mapStateToProps, { ordersFetch, orderDelete, ordersPost, orderCancel })(Order)