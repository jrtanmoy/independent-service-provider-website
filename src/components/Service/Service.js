import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <div className='service-info'>
                <h2>{name}</h2>
                <p>Price:${price}</p>
                <p><small>{description}</small></p>
            </div>
            <button className='btn-cart'>Buy Now</button>
        </div>
    );
};

export default Service;