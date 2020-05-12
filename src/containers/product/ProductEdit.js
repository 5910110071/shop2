import React, { Component } from "react"
import { connect } from "react-redux"
import { productCreate, productUpdate, productFetch } from "../../actions"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductForm from "../../components/product/ProductForm"

class ProductEdit extends Component {
    componentDidMount() {
        if (this.props.match.params.id) { 
            this.props.productFetch(this.props.match.params.id)
            //console.log("this.props.match",this.props.match)
        }
    }
    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        //console.log("formValues",formValues);
        return (
            <div>
                <Header />
                <div className="container col-md-5"> 
                    {match.path.indexOf("add") > 0 && (
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
                    )}

                </div>

                <Footer />
            </div>
        )
    }
}
function mapStateToProps({ form, products }) {
    //console.log("formValues",formValues)
    return { formValues: form.productForm ? form.productForm.values : null, products }
}
export default connect(mapStateToProps, { productCreate, productUpdate, productFetch })(ProductEdit)