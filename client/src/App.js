import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import Header from './containers/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'

import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

function App({ match }) {
  return (
    <Router>
      <Header />
      <hr></hr>
      <NavBar />
      <hr className="mt-0"></hr>

      <Switch>
        <Route exact path="/" component={HomePage}>

        </Route>
        <Route path="/:id" component={Products} />
      </Switch>

      <Footer className="footer"></Footer>
    </Router>


  )
}
export default App;
