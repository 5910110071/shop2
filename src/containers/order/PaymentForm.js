import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import FormField from "../../components/common/FormField"
import { orderFormField } from "./OrderFormFields"
class PaymentForm extends Component {

    renderFields(orderFormField) {

        return orderFormField.map(({ label, name, type, required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })

    }

    render() {
        const { onProductSubmit } = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(orderFormField)}
                    <button className="btn btn-block btn-info title" type="submit" >บันทึก</button>
                </form>
 
            </div>
        )
    }
}

function validate(values) {
    console.log(values)
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

PaymentForm = reduxForm({ validate, form: "paymentFhhorm" })(PaymentForm)
export default connect(mapStateToProps)(PaymentForm)