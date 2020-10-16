import React from 'react';

const CustomerReview = ({ReviewData}) => {
    const { authorImg, name, title, review } = ReviewData;
    return (
        <div className="card">
        <div className="mt-3 d-flex  align-items-center">
            <img className="mx-3" src={authorImg} alt="" width="60" />
            <div>
                <h6>{name}</h6>
                <p className="m-0">{title}</p>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text text-secondary">{review}</p>
        </div>
     </div>
    );
};

export default CustomerReview;