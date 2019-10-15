import React from 'react';
import Header from '../../containers/Header';
import NavBar from '../NavBar/NavBar';
import LargeItem from '../Items/LargeItem';
import Footer from '../Footer/Footer';



function HomePage() {
    return (
        <div >
            <Header />
            <hr></hr>
            <NavBar />
            <hr className="mt-0"></hr>
            <LargeItem></LargeItem>
            <Footer className="footer"></Footer>

        </div>

    )
}
export default HomePage;
