import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  showProducts() {
    return (
      this.props.products &&
      this.props.products.map(product => (
        <ProductItem product={product} key={product.product_id} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct = {this.props.onEditProduct} onSelectProduct = {this.props.onSelectProduct} />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default ProductList; 
