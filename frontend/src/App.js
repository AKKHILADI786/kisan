import React, { Component } from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './component/Header'
import Clouser from './component/Clouser'
import Footer from './component/Footer'
import Login from './component/login'
import Register from './component/Register'


function App() {
  return (

    <Router>
      <Header/>
      {/* <Login/> */}
      <Route path="/login" component={Login} />  
      <Route path="/register" component={Register} />  
      <Route path="/home" component={Clouser} />  
      
      <hr/>
      <Footer/>
    </Router>
    
  );
}

export default App;
