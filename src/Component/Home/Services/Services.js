import React,{ useState, useEffect } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



// const serviceData = [
//     {
//         name: 'Fluoride Treatment',
//         img: service1
//     },
//     {
//         name: 'Cavity Filling',
//         img: service2
//     },
//     {
//         name: 'Teeth Whitening',
//         img: service3
//     }
// ]



const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    
    useEffect(() => {
        fetch('https://thawing-peak-06922.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
   
    return (
        <div className="container my-5">
        <section className="services-container text-center">
        <h1 className="mb-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className="d-flex justify-content-center">
            <div className="w-75 row pt-5">
                {
                serviceData.map((services , id)  => <ServiceDetail services={services} key={id}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
        </div>
      
    );
};

export default Services;