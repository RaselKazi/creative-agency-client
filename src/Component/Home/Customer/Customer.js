import React from 'react';
import Customer1 from '../../../images/customer-1.png';
import Customer2 from '../../../images/customer-2.png';
import Customer3 from '../../../images/customer-3.png';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Customer.css'


const ReviewData = [
    {
        name: "Nash Patrik",
        title: "CEO, Manpol",
        authorImg : Customer1,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.'
       
    },
    {
        name: "Bria Malone",
        title: "CEO, Manpol",
        authorImg : Customer2,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.'
       
    },
    {
        name: "Bria Malone",
        title: "CEO, Manpol",
        authorImg : Customer3,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.'
        
    }
]

const Blogs = () => {
    return (
        <div className="container mt-5">
        <div>
            <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
        </div>
   
                <div className="card-deck mt-5">
                {
                    ReviewData.map(Review => <CustomerReview ReviewData={Review} key={Review.name}></CustomerReview>)
                }
            </div>    
    </div>
    );
};

export default Blogs;