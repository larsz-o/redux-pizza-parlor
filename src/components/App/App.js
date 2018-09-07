import React, { Component } from 'react';
import './App.css';
import SelectView from '../SelectView/SelectView.js';
import CustomerView from '../CustomerView/CustomerView.js';
import CheckoutView from '../CheckoutView/CheckoutView.js';
import AdminView from '../AdminView/AdminView.js';
import {HashRouter as Router, Route} from "react-router-dom";
import Header from '../Header/Header.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Header/>
          <br/>
          {/* CLient-side Routers */}
          <Route exact path="/" component={SelectView} />
          <Route path="/customer" component={CustomerView} />
          <Route path="/checkout" component={CheckoutView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
