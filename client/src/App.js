import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products'

import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
    </Router>
  )
}
export default App;
