import React from 'react';
import './BrendCard.css';


const InfoCard = ({ brend }) => {
    console.log(brend)
    return (
        <div className="col-md-2 col-sm-4">
            <div className="brend-img">
               <img src={require(`../../../images/logos/${brend.imgName}`)} alt=""/>
            </div>
        </div>
    );
};

export default InfoCard;