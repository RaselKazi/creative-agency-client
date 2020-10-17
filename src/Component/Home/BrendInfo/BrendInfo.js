import React from 'react';
import BrendCard from '../BrendCard/BrendCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const brendData = [
    {
        imgName: 'slack.png',
    },
    {
        imgName: 'google.png',
    },
    {
        imgName: 'uber.png',
    },
    {
        imgName: 'netflix.png',
    },
    {
        imgName: 'airbnb.png',
    },
    
]
const BrendInfo = () => {
    return (
        <div className="container my-5" >
        <section className="my-5 ">
            <div className=" row d-flex justify-content-around">
                {
                    brendData.map(brend => <BrendCard brend={brend} key={brend.imgName}></BrendCard>)
                }
            </div>
        </section>
        </div>
        
    );
};

export default BrendInfo;