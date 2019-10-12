import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import LargeItem from './components/Items/LargeItem';
import Footer from './components/Footer/Footer';



function HomePage() {
    return (
        <div >
            <Header />
            <hr></hr>
            <NavBar />
            <hr></hr>
            <LargeItem></LargeItem>
            <Footer className="footer"></Footer>

        </div>

    )
}
export default HomePage;
