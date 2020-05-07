import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import FormField from "../common/FormField"
import { productFormField } from "./formFields"
class ProductForm extends Component {

    renderFields(productFormField) {

        return productFormField.map(({ label, name, type, required }) => {
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
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit" >บันทึก</button>
                </form>

            </div>
        )
    }
}

function validate(values) {
    console.log(values)
    const errors = {};
    productFormField.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล'
        }
    })
    return errors // redux from จะจัดการโดยการส่ง error ไปให้ Field
}
function mapStateToProps({ products }) {
    if (products && products.id) {
        return { initialValues: products }
    }
    else {
        return {}
    }

}

ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm)
export default connect(mapStateToProps)(ProductForm)