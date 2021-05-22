import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Header from './component/Header'
import Clouser from './component/Clouser'
import Footer from './component/Footer'
import Login from './component/login'
import Profile from './component/profile'
import Register from './component/Register'


function App() {

  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Clouser} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />

      </Switch>
      <hr />
      <Footer />
    </Router>

  );
}

export default App;
