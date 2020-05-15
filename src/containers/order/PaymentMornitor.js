import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import UpdateTrackingNumber from "../order/UpdateTrackingNumber"

import { ordersFetch, orderDelete, ordersPaidFetch, ordersReset, ordersPaymentStatusPut } from '../../actions'
import axios from "axios"
class PaymentMornitor extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.ordersPaidFetch()
    }

    changeStatus(order, status) {
        console.log("order", order)
        order.status = status
        this.props.ordersPaymentStatusPut(order.id, order)

    }

    showOrders() {

        return this.props.orders && Array.isArray(this.props.orders) && this.props.orders.map(order => {
            const date = new Date(order.orderDate)
            return (
                <div key={order.id} className="col-12">
                    <div className="card mb-4">
                        <h5 className="text-center mt-3 mb-3">รายการสั่งซื้อวันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                        <div className="row d-flex justify-content-center">
                            {order.orders && order.orders.map(record => {
                                return (
                                    <div key={record.product.product_id} className="col-2 d-flex flex-column bd-highlight mb-2">

                                        <img src={record.product.product_thumbnail} class="card-img-top img-thumbnail mb-2  rounded mx-auto d-block" Style="width: 100px;" alt="..." />
                                        <h6 className="text-center title ">{record.product.product_name}</h6>
                                        <h6 className="text-center title ">จำนวน : {record.quantity}</h6>
                                        <h6 className="text-center title ">ราคา : {record.product.product_price * record.quantity} บาท</h6>
                                    </div>
                                )
                            })}
                        </div>
                        <h5 className="title text-center text-danger mb-3">ยอดรวม {order.totalPrice} บาท </h5>
                        <hr />
                        <h5 className="text-center mt-2 ">ข้อมูลการชำระเงิน</h5>
                        <div className="ml-2 text-center">
                            <p>ชื่อ : {order.Name}</p>
                            <p>ที่อยู่ : {order.Address} </p>
                            <p>เบอร์โทร์ : {order.Tel}</p>
                            <p>หลักฐานการโอน : {order.Silp}</p>
                            <p>สถานะ : {order.status}


                            </p>


                            <button type="button" class={order.status == "สินค้ากำลังจัดส่ง" ? "btn btn-success ml-2 " : "btn btn-secondary ml-2"} onClick={() => this.props.history.push('/UpdateTrackingNumber/' + order.id)}>
                                เพิ่มหมายเลขติดตามสินค้า
                                </button>
                            <p>หมายเลขติดตามสินค้า : {order.TrackingNumber} </p>




                        </div>
                        <div class="btn-group dropup mb-2 ">

                            <button type="button" class={order.status == "ข้อมูลการชำระเงินถูกต้อง" ? "btn btn-success ml-2 " : "btn btn-secondary ml-2"} onClick={() => this.changeStatus(order, "ข้อมูลการชำระเงินถูกต้อง")}>ข้อมูลการชำระเงินถูกต้อง</button>
                            <button type="button" class={order.status == "สินค้ากำลังจัดส่ง" ? "btn btn-success ml-2 " : "btn btn-secondary ml-2"} onClick={() => this.changeStatus(order, "สินค้ากำลังจัดส่ง")}>สินค้ากำลังจัดส่ง</button>
                            <button type="button" class={order.status == "สินค้าจัดส่งสำเร็จ" ? "btn btn-success ml-2 mr-2 " : "btn btn-secondary ml-2 mr-2"} onClick={() => this.changeStatus(order, "สินค้าจัดส่งสำเร็จ")}>สินค้าจัดส่งสำเร็จ</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Header menu={this.props.match.path} />
                <div className="container" style={{ minHeight: '79vh', backgroundColor: '#f5f5f5' }}>
                    <h2 className="text-center pt-3 mb-3">ตรวจสอบรายการสั่งซื้อ</h2>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
function mapStateToprops({ orders }) {
    console.log("payments", orders)
    return { orders }
}
export default withRouter(connect(mapStateToprops, { ordersPaidFetch, ordersReset, ordersPaymentStatusPut })(PaymentMornitor))