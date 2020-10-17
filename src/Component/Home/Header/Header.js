import React from 'react';
import BusinessInfo from '../BrendInfo/BrendInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="header-container">    
                <HeaderMain></HeaderMain>     
            </section>
            <BusinessInfo></BusinessInfo>
        </div>
        
    );
};

export default Header;