import React from 'react';
import picture from '../../images/joy.jpg'

const About = () => {
    return (

        <div className='row d-flex justify-content-center align-items-center gap-3 text-center mt-5 pt-3'>
            <div className='col-md-6 col-lg-6 order-2 order-sm-2 order-md-2 order-lg-2'>
                <h2> My name is Joy Roy.</h2>
                <p>
                    <span className='fw-bold fs-2'> Goal :

                    </span>
                    <span className='fs-4 fst-italic'>
                        My Goal is to become a professional full stack web developer and started a career in the web development field. Along with this I want to settle my career to a tech giant company.
                    </span>
                </p>
                <p>
                    <span className='fw-bold fs-2'> Commitment :

                    </span>
                    <span className='fs-4 fst-italic'>
                        I am not only interested but also commited to become a full stack web developer. To achieve my goal i make a plan and breck down it into some steps. First step of my plan is to become a front end developer and then I want to learn back end to become a full stack web developer. I am working so hard and will work hard in the future to achieve my goal. I know this is not going to be easy but i'm commited to do what it takes to become a developer.
                    </span>
                </p>
            </div>
            <div className='col-md-6 col-lg-6 mb-4  pb-4 order-sm-1 order-md-1 order-lg-1'>
                <img className='w-50 mt-4' src={picture} alt="a gentleman" />
            </div>
        </div>

    );
};

export default About;