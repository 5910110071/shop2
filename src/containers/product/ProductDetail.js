import React, { Component } from 'react';
import { productFetch, orderAdd, orderDelete } from "../../actions"
import { connect } from "react-redux"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id)
        }
    }
    addOrder(product) {
        this.props.orderAdd(product)

        this.setState({
            count: this.state.count + 1
        })
    }

    delOrder(id) {
        if (this.state.count != 0) {
            this.props.orderDelete(id)
            this.setState({
                count: this.state.count - 1
            })
        }

    }


    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.products.map(product => {
                        return (
                            <div className="card mb-3 ">
                                <div className="row no-gutters">

                                    <div className="col-md-4">
                                        <img src={product.product_thumbnail} className="card-img" alt="..." />
                                    </div>

                                    <div className="col-md-8">

                                        <div className="card-body">
                                            <h5 className="card-title">{product.product_name}</h5>
                                            <p className="card-text">{product.product_detail}</p>
                                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>

                                        <div class="input-group">
                                            <span class="input-group-btn">
                                                <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" onClick={() => this.delOrder(product.product_id)}>
                                                    <span class="glyphicon glyphicon-minus">-</span>
                                                </button>
                                            </span>
                                            <input type="text" id="quantity" name="quantity" class="form-control input-number" value={this.state.count} min="1" max="100" />
                                            <span class="input-group-btn">
                                                <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onClick={() => this.addOrder(product)}>
                                                    <span class="glyphicon glyphicon-plus">+</span>
                                                </button>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ products, orders }) {
    return { products, orders }
}

export default connect(mapStateToProps, { productFetch, orderAdd, orderDelete })(ProductDetail)