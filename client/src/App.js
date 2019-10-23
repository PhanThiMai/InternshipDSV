
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Products from './containers/Products'
import Product from './containers/Product'
import Header from './containers/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import AddingProduct from './components/AddingProduct/AddingProduct'

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";


function App() {

  const token = localStorage.getItem("usertoken");
  const isLogin = token ? true : false;
  let admin = false;
  if (isLogin) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    let decode = JSON.parse(jsonPayload);
    if (decode.role === 'admin') admin = true;
  }

  return (
    <Router>
      {/* <Header />
      <hr></hr>
      <NavBar />
      <hr className="mt-0"></hr>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:id" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/admin">
          {!admin ? <Redirect to="/" /> : <AddingProduct />}
        </Route>

      </Switch >

      <Footer className="footer"></Footer> */}

      <AddingProduct />
    </Router >
  )
}
export default App;
