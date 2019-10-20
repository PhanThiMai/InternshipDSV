
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
// import Products from './components/Products/Products';
import Products from './containers/Products'
import Product from './components/Product/Product';
import Header from './containers/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'

import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";


import './api/axios.config'

function App() {


  return (
    <Router>
      <Header />
      <hr></hr>
      <NavBar />
      <hr className="mt-0"></hr>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:id" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>

      <Footer className="footer"></Footer>
    </Router>


  )
}
export default App;
