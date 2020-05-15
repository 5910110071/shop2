import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import FormField from "../../components/FormField"
import { orderFormField } from "./OrderFormFields"
class PaymentForm extends Component {

    renderFields(orderFormField) {

        return orderFormField.map(({ label, name, type, required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })

    }
    showOrders() {
        //console.log("this.props.orders", this.props.orderPayment)
        const date = new Date(this.props.orderPayment.orderDate)
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
                <div className="card mb-4">
                    <h5 className="text-center mt-2">วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <div className="row">
                        {this.props.orderPayment.orders && this.props.orderPayment.orders.map(record => {
                            return (
                                <div key={record.product.product_id} className="col-3 d-flex flex-column bd-highlight mb-3">
                                    <img src={record.product.product_thumbnail} class="card-img-top img-thumbnail mb-2 mr-2 ml-2 rounded mx-auto d-block " Style="width: 100px;" alt="..." />
                                    <h6 className="text-center title ">{record.product.product_name} x {record.quantity} = {record.product.product_price * record.quantity}</h6>
                                </div>
                            )
                        })}
                    </div>


                    <p className="title text-right mr-2">ยอดรวม {this.props.orderPayment.totalPrice} บาท</p>
                </div>
            </div>




        )
    }


    render() {
        const { onPaymentSubmit } = this.props
        return (
            <div className="container">
                <div className="row" >
                    {this.showOrders()}
                    <form onSubmit={this.props.handleSubmit(onPaymentSubmit)}>
                        {this.renderFields(orderFormField)}
                        <button className="btn btn-block btn-danger title" type="submit" >บันทึก</button>
                    </form>
                </div>


            </div>
        )
    }
}

function validate(values) {
    console.log("values", values)
    const errors = {};
    orderFormField.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล'
        }
    })
    return errors // redux from จะจัดการโดยการส่ง error ไปให้ Field
}
function mapStateToProps({ orderPayment }) {
    if (orderPayment && orderPayment.id) {
        return { initialValues: orderPayment }
    }
    else {
        return {}
    }

}

PaymentForm = reduxForm({ validate, form: "paymentForm" })(PaymentForm)
export default connect(mapStateToProps)(PaymentForm)