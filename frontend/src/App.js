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
import Contactus from './component/contactus'
import Fruit from './component/fruit'
import Vegetable from './component/vegetable'
import Crop from './component/crop'
import Spices from './component/spices'


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
      <Route exact path="/contact" component={Contactus} />
      <Route exact path="/fruit" component={Fruit} />
      <Route exact path="/vegetable" component={Vegetable} />
      <Route exact path="/crop" component={Crop} />
      <Route exact path="/spices" component={Spices} />

      </Switch>
      <hr />
      <Footer />
    </Router>

  );
}

export default App;
