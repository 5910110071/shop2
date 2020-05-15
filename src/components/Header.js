import React, { Component } from "react";
import { Link } from 'react-router-dom'

import { connect } from "react-redux"
import { categoriesFetch, productsFetchFromCategory, productsFetch } from "../actions"


class Header extends Component {
  constructor(props) {
    super(props);
    //this.state = { date: new Date() };
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.tick(), 1000);
    //console.log("this.props.menu",this.props.menu.includes("paymentOrderConfirm"))

    this.props.categoriesFetch()
    

    
    // console.log("this.props.match", this.props.match.path)

  }

  componentDidUpdate() { }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  // tick() {
  //   // this.state = {date : new Date()};
  //   this.setState({ date: new Date() });
  // }


  renderCategories() {
    return this.props.categories && this.props.categories.map(category => {
      return (

        <a key={category.category_id} className="dropdown-item title" onClick={() => this.getProductFromCategory(category.category_id)} href="#">{category.category_name}</a>
      )
    })
  }

  getProductFromCategory(id) {
    this.props.productsFetchFromCategory(id)
    //console.log(id)
  }

  getProducts() {
    this.props.productsFetch()
    //console.log(id)

  }

  render() {
    return (
      <div>
        <div className="row bg-danger">
          <div className="container">

            <div className="col-md-8 text-left mt-2">
              <h1 className="text-white">
                <img className = "" style={{ height: 70 }} src="https://img.icons8.com/material-outlined/100/000000/online-shop-2.png" alt="" />{" "}
              eOnlineShop {" "}
              </h1>
            </div>
          </div>
        </div>
        < div className="row bg-danger " style={{backgroundColor:'black'}}>
            <div className="col-12 ">
              <nav class="navbar navbar-expand-lg navbar-light  " >
              <div className="container bg-danger">
                <a class="navbar-brand title" href="#"><h4>รายการ</h4></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                      
                      <Link className={this.props.menu === "/" ? "nav-link title card mr-2" : "nav-link title mr-2"} to="/"><h7>สินค้า</h7> <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                      <Link className={this.props.menu === "/order" ? "nav-link title card mr-2" : "nav-link title mr-2"} to="/order"><h7>ตะกร้า</h7> <span class="sr-only">(current)</span></Link>
                    </li>


                    {/* <li class="nav-item active">
                    <Link class="nav-link title" to="/about">เกี่ยวกับเรา <span class="sr-only">(current)</span></Link>
                  </li>  */}

                    <li class="nav-item active">
                      <Link className={(this.props.menu === "/paymentOrder" || this.props.menu.includes("paymentOrderConfirm")) ? "nav-link title card mr-2" : "nav-link title mr-2"} to="/paymentOrder"><h7>แจ้งชำระเงิน</h7> <span class="sr-only">(current)</span></Link>
                    </li>

                    <li class="nav-item active">
                      <Link className={this.props.menu === "/paymentMornitor" ? "nav-link title card mr-2" : "nav-link title mr-2"} to="/paymentMornitor"><h7>ตรวจสอบรายการสั่งซื้อ</h7><span class="sr-only">(current)</span></Link>
                    </li>

                    {this.props.showCategoryAndSearch &&
                      <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle title " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <h7>หมวดหมู่สินค้า</h7>
                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          {this.renderCategories()}
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item title" href="#" onClick={() => this.getProducts()}>สินค้าทั้งหมด</a>
                        </div>
                      </li>
                    }
                  </ul>
                  {this.props.showCategoryAndSearch &&
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-secondary my-2 my-sm-0 text-white title" type="submit">ค้นหา</button>
                    </form>
                  }

                </div>
                </div>
              </nav>
            
            </div>
          
        </div>
      </div>

    );
  }
}

function mapStateToProps({ products, categories }) {
  return { products, categories }
}


export default connect(mapStateToProps, { categoriesFetch, productsFetchFromCategory, productsFetch })(Header);
