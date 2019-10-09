import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/navBar/NavBar';
import LargeItem from './components/Items/LargeItem';
import 'bootstrap/dist/css/bootstrap.min.css';








function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <LargeItem></LargeItem>
    </div>

  )
}
export default App;
