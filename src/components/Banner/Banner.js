import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import logo from '../../images/logo2.png'
import banner1 from '../../images/banner3.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner1.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='container mt-3' >
            <div className='d-flex justify-content-center align-items-center gap-3'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <h1 className='text-warning'>Reflector-wild photographer</h1>
                    <h5>JR Tanmoy</h5>
                </div>
            </div>
            <div className='mt-3 mb-3'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Look deep into nature, and then you will understand everything better....</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h4>Wilderness without wildlife is just scenery.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h4>
                                The love for all living creatures is the most noble attribute of man.
                            </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;