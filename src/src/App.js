import './App.css'
import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from "react-router-dom"
import Home from "./containers/Home"
import About from "./containers/About"
import Order from "./containers/order/Order"
import ProductDetail from "./containers/product/ProductDetail"
import NotFound from "./containers/error/NotFound"

import PaymentOrder from "./containers/order/PaymentOrder"
import PaymentOrderConfirm from "./containers/order/PaymentOrderConfirm"
import PaymentMornitor from "./containers/order/PaymentMornitor"

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/order" component = {Order} />
        <Route exact path = "/paymentOrder" component = {PaymentOrder} />
        <Route exact path = "/paymentOrderConfirm/:id" component = {PaymentOrderConfirm} />
        <Route exact path = "/paymentMornitor" component = {PaymentMornitor} />
        <Route exact path="/product/:id" component={ProductDetail}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }

  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
