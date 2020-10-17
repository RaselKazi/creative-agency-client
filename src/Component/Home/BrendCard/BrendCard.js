import React from 'react';
import './BrendCard.css';


const InfoCard = ({ brend }) => {
    console.log(brend)
    return (
        <div className=" col-lg-2 col-md-4 col-sm-4 justify-content-sm-center">
            <div className="brend-img">
               <img src={require(`../../../images/logos/${brend.imgName}`)} alt=""/>
            </div>
        </div>
    );
};

export default InfoCard;