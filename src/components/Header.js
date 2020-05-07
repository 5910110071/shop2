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
            <h1 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />{" "}
              เฮลตี้ คาเฟ่2 {" "}
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
                  <li class="nav-item active">
                    <Link class="nav-link title" to="/product">สินค้า <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link title" to="/about">เกี่ยวกับเรา <span class="sr-only">(current)</span></Link>
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
