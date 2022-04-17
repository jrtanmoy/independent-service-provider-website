import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <div className='service-info'>
                <h2 className='text-warning'>{name}</h2>
                <p>Price:${price}</p>
                <p><small>{description}</small></p>
            </div>
            <button onClick={() => navigateToServiceDetail(id)} className='btn-cart'>Book: {name}</button>
        </div>
    );
};

export default Service;