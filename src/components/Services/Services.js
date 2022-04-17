import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-success text-center mt-5 mb-5'>Services</h1>
            <div className="justify-content-center p-2 gap-5 services-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;