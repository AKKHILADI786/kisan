import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Header from './component/Header'
import Clouser from './component/Clouser'
import Footer from './component/Footer'
import Login from './component/login'
import Profile from './component/profile'
import Product from './component/product'
import Register from './component/Register'
import PlaceOrder from './component/placeOrder'
import Checkout from './component/checkout'


function App() {

  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Clouser} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/placeorder" component={PlaceOrder} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/checkout" component={Checkout} />

      </Switch>
      <hr />
      <Footer />
    </Router>

  );
}

export default App;
