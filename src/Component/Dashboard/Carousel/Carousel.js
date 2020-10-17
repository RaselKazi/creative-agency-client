import React from 'react';
import './Carousel.css';
import Carousel from "react-elastic-carousel";
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import CaruselItme from './CaruselItme';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Work = () => {
    return (
        <div className="carousel-section">
            <h3 className="text-center mb-5">Here are some of <span className="text-success">our works</span> </h3>
            <div className="carousel-Sections-item">
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
                    <CaruselItme>
                        <img src={carousel5} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel1} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel2} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel3} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel3} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel4} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel5} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel1} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel2} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel3} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel4} alt=""/>
                    </CaruselItme>
                    <CaruselItme>
                        <img src={carousel5} alt=""/>
                    </CaruselItme>
                </Carousel>
            </div>
        </div>
    );
};

export default Work;