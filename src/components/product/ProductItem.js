import React, { Component } from "react";

class ProductItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { product_name, product_price, product_thumbnail } = this.props.product;
        return (
            <div className="col-md-2">
                <img className="img-fluid img-thumbnail" src={product_thumbnail} />
                <h5 className="mt-2">{product_name}</h5>
                <p className="title text-right" >{product_price} THB</p>
    
                {this.props.onSelectProduct && <button className="btn btn-block btn-danger btn-sm mt-2" onClick={() => this.props.onSelectProduct(this.props.product)}>เลือก</button>}
                {/* {(this.props.onDelProduct || this.props.onEditProduct) && <button className="btn  btn-info btn-sm mt-2 col-5 " onClick={() => this.props.onEditProduct(this.props.product)} >แก้ไข</button>}
                {(this.props.onDelProduct || this.props.onEditProduct) && <button className="btn  btn-danger btn-sm mt-2 col-5 float-right" onClick={() => this.props.onDelProduct(this.props.product)}>ลบ</button>} */}
                <hr />
            </div>
        )
    }
}

export default ProductItem;