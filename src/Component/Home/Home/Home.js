import React from 'react';
import Services from '../Services/Services';
import Customer from '../Customer/Customer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Customer></Customer>  
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;