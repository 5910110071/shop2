import React, { Component } from "react";
import { withRouter } from "react-router-dom"

class Monitor extends Component {

    constructor(props) {
        super(props);
    }

    selectProduct(product) {
        this.props.history.push('product/' + product.product_id)
    }

    showProducts() {
        console.log("this.props.products", this.props.products);
        return (
            this.props.products &&
            this.props.products.map(product => (
                // <div className="col-md-2">
                //     <img className="img-fluid img-thumbnail" src={product.product_thumbnail} />
                //     <h5 className="mt-2">{product.product_name}</h5>
                //     <p className="title text-right" >{product.product_price} THB</p>
                //     <button className="btn btn-block btn-danger btn-sm mt-2" onClick={() => this.selectProduct(product)}>เลือก</button>
                //     <hr />
                // </div>

                <div class="col-md-3 btn" onClick={() => this.selectProduct(product)} >
                    <div className = "card bg-danger text-white">
                        <img src={product.product_thumbnail} class="card-img-top" alt="..." />
                        <div class="d-flex justify-content-between mt-2 ml-2 mr-2">
                            <h5 className="text-left">{product.product_name}</h5>
                            <h5 className="title text-right" >{product.product_price} บาท</h5>
                            {/* <button className="btn btn-block btn-danger btn-sm mt-2" onClick={() => this.selectProduct(product)}>เลือก</button> */}
                        </div>
                    </div>

                </div>

                // <div key={order.product_id} class="col-3 text-right text-success title">
                //     <div class="card" >
                //         <img src={order.product.product_thumbnail} class="card-img-top" alt="..." />
                //         <div class="card-body">
                //             <h5 class="card-title">{order.product.product_name} x {order.quantity} = {order.product.product_price * order.quantity}</h5>

                //             <button className="btn btn-light btn-sm" onClick={() => this.cancelOrder(order.product)} >X</button>
                //         </div>
                //     </div>
                // </div>





            ))
        );
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">รายการสินค้า</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {this.showProducts()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Monitor); 