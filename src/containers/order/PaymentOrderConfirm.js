import React, { Component } from "react" 
import { connect } from "react-redux"

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PaymentForm from "../../containers/order/PaymentForm"

import { ordersFetch, orderDelete, orderPaymentFetch , paymentPost } from '../../actions/'

class PaymentOrderComfirm extends Component {
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.orderPaymentFetch(this.props.match.params.id)
           
        }
    }
    render() {
        const { formValues, match, products, productCreate, productUpdate , orderPayment , paymentPost } = this.props;
        return (
            <div>
                <Header />
                <div className="container col-md-5">

                    <div>
                        <h2>แจ้งชำระเงิน</h2>
                        {/* {
                            products.saved &&
                            <div className="alert alert-secondary title" role="alert">
                                {this.props.products.msg}
                            </div>
                        } */}

                        <PaymentForm onPaymentSubmit={() => paymentPost(formValues) } orderPayment = {orderPayment} />
                    </div>



                    {/* {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>เพิ่ม</h2>
                            {
                                products.saved &&
                                <div className="alert alert-secondary title" role = "alert">
                                    {this.props.products.msg}
                                </div>
                            }
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>แก้ไข</h2>
                            {
                                products.saved &&
                                <div className="alert alert-secondary title" role = "alert">
                                    {this.props.products.msg}
                                </div>
                            }
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )} */}

                </div>

                <Footer />
            </div>
        )
    }
}
function mapStateToProps({ form, orderPayment }) {
    return { formValues: form.paymentForm ? form.paymentForm.values : null, orderPayment }
}
export default connect(mapStateToProps, { orderPaymentFetch , paymentPost })(PaymentOrderComfirm)