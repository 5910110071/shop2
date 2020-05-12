import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { categoriesFetch, productsFetchFromCategory, productsFetch } from "../actions"


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    this.props.categoriesFetch()


    // console.log("this.props.match", this.props.match.path)

  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }


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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-danger">
              <img style={{ height: 70 }} src="data:image/png;base64,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" alt="" />{" "}
              eOnlineShop {" "}
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>

        </div>
        < div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand title" href="#">รายการ</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link class="nav-link title" to="/">หน้าหลัก <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link title" to="/order">รายการสั่งชื้อ <span class="sr-only">(current)</span></Link>
                  </li>

                  {/* <li class="nav-item active">
                    <Link class="nav-link title" to="/product">สินค้า <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link title" to="/about">เกี่ยวกับเรา <span class="sr-only">(current)</span></Link>
                  </li> */}

                  <li class="nav-item active">
                    <Link class="nav-link title" to="/paymentOrder">แจ้งชำระเงิน <span class="sr-only">(current)</span></Link>
                  </li>

                  <li class="nav-item active">
                    <Link class="nav-link title" to="/paymentMornitor">ตรวจสอบรายการสั่งซื้อ<span class="sr-only">(current)</span></Link>
                  </li>

                  {this.props.showCategoryAndSearch &&
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle title" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        หมวดหมู่สินค้า
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
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                }

              </div>
            </nav>
          </div>
        </div>
        <hr />
      </div >
    );
  }
}

function mapStateToProps({ products, categories }) {
  return { products, categories }
}


export default connect(mapStateToProps, { categoriesFetch, productsFetchFromCategory, productsFetch })(Header);
