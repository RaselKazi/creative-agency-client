import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className="container">
            <div style={{height:'600px'}} className="row d-flex align-items-center ">
                <div className="col-md-6 col-sm-6">
                    <h1 style={{color: '#000', fontSize:"3rem"}}>Let’s Grow Your<br/>Brand To The <br/> Next Level</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <button className="btn btn-dark">Hire us</button>
                </div>
                <div className="col-md-6 col-sm-6 p-3">
                    <img src={Frame} alt="" className="offset-md-2 img-fluid"/>
                </div>
            </div>
        </div>
       
    );
};

export default HeaderMain;