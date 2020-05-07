import React, { Component } from 'react';

import Header from "../components/Header";

import Footer from "../components/Footer";

import axios from "axios"

class Category extends Component {

  constructor(props) {
    super(props);

  }

  renderCategories() {
    return this.props.categories && this.props.categories.map(category => {
      return (
        <a key={category.category_id} className="dropdown-item" onClick={() => this.props.onGetProductFromCategory(category.category_id)} href="#">{category.category_name}</a>
      )
    })
  }

  render() {
    return (
      <div>
        
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
  </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {this.renderCategories()}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Category;
