import React from 'react';
import logo from '../../../images/logos/logo.png';
const Navbar = () => {
    return (
        <div className="container">
         <nav className="navbar navbar-expand-lg pt-4 navbar-light">
         <a class="navbar-brand" href="#"><img src={logo} alt="" style={{ width: '150px'}} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Contact Us</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-dark">Login</button>   
            </div>
        </nav>
        </div>
        
    );
};

export default Navbar;