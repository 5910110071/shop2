import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import FormField from "../../components/FormField"
import { TrackingNumberFormFields } from "./TrackingNumberFormFields"
class UpdateTrackingNumberForm extends Component {

    renderFields(TrackingNumberFormFields) {

        return TrackingNumberFormFields.map(({ label, name, type, required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    showOrders() {
        //console.log("this.props.orders", this.props.orderPayment)
        const date = new Date(this.props.orders.orderDate)
        return (
            // <div className="col-md-12">

            //     <hr />
            //     <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
            //     <ul>
            //         {this.props.orderPayment.orders && this.props.orderPayment.orders.map(record => {
            //             return (
            //                 <div key={record.product.product_id}>
            //                     <img src={record.product.product_thumbnail} class="card-img-top img-thumbnail mb-2 mr-2 " Style="width: 100px;" alt="..." />{record.product.product_name} x {record.quantity} = {record.product.product_price * record.quantity}
            //                 </div>
            //             )
            //         })}
            //     </ul>
            //     <p className="title text-right">ยอมรวม {this.props.orderPayment.totalPrice}</p>

            // </div>

            <div className="col-md-12">
                <div className=" mb-4">
                    <h5 className="text-center mt-3 mb-3">รายการสั่งซื้อวันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <div className="row d-flex justify-content-center">
                        {this.props.orders.orders && this.props.orders.orders.map(record => {
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


                    <h5 className="title text-center text-danger mb-3">ยอดรวม {this.props.orders.totalPrice} บาท </h5>
                </div>
            </div>




        )
    }

    render() {
        const { onPaymentSubmit } = this.props
        return (
            <div className="container card  mb-3 ">
                <div className="row d-flex justify-content-center" >
                    {this.props.orders.saved ?
                        <div class="alert alert-success text-center col-12" role="alert">
                            <h5>{this.props.orders.msg}</h5> <button className="btn btn-success title">กดเพื่อติดตามสินค้า</button>
                        </div> :
                        <> {this.showOrders()}

                            <div className="col-6 ">
                                <form onSubmit={this.props.handleSubmit(onPaymentSubmit)}>
                                    {this.renderFields(TrackingNumberFormFields)}
                                    <div className="d-flex justify-content-end">
                                        <button className="btn  btn-danger title mb-3 " type="submit" >บันทึก</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    }

                </div>
            </div>
        )
    }
}

function validate(values) {
    console.log("values", values)
    const errors = {};
    TrackingNumberFormFields.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล'
        }
    })
    return errors // redux from จะจัดการโดยการส่ง error ไปให้ Field
}
function mapStateToProps({ orders }) {
    if (orders && orders.id) {
        return { initialValues: orders }
    }
    else {
        return {}
    }

}

UpdateTrackingNumberForm = reduxForm({ validate, form: "TrackingNumberForm" })(UpdateTrackingNumberForm)
export default connect(mapStateToProps)(UpdateTrackingNumberForm)