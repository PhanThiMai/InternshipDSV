import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import LargeItem from '../Items/LargeItem';
import Footer from '../Footer/Footer';



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
