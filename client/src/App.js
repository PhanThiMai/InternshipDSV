
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProduct from './containers/AddProduct'
import User from './User'

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

  //localStorage.removeItem('cart');
  //localStorage.removeItem('token');




  return (


    <Router>

      <Switch>

        <Route exact path="/admin">
          {!admin ? <Redirect to="/" /> : <AddProduct />}
        </Route>
        <Route exact path="" component={User} />
      </Switch>

    </Router >
  )
}
export default App;
