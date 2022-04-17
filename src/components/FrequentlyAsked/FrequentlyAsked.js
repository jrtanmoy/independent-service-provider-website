import React from 'react';
import { Accordion } from 'react-bootstrap';
import service1 from "../../images/service1.jpg"

const FrequentlyAsked = () => {
    return (
        <div className='mt-4 pt-5'>
            <section className="container my-2 py-1">
                <h2 className="display-5 text-success fw-bold text-center mb-5 pb-4">Frequently Asked Questions</h2>
                <div className="row d-flex justify-content-center align-items-center  mt-4 pt-2 px-4">
                    <div className="col-md-6 col-lg-6 order-1 order-sm-1 order-md-1 order-lg-1">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How much experience do you have?</Accordion.Header>
                                <Accordion.Body>
                                    My years of experience have prepared me well for this position. I have been learning photography for seven years now. I spent three years working in a safari park, capturing some of the stunning photo.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you shoot in JPEG, Small Raw, or Large Raw?</Accordion.Header>
                                <Accordion.Body>
                                    I shoot most of my images in Small Raw with certain situations where i move to Large Raw.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How many images do you typically deliver from one day booking for safari wildlife shoot?</Accordion.Header>
                                <Accordion.Body>
                                    It's depends on customer request. Most often its 100-150 pictures.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How do you collaborate with others?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, I do. Most of the cases I work for magazin.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How long does it take to get my prints?</Accordion.Header>
                                <Accordion.Body>
                                    Product creation times vary, however, print orders will generally be completed within 6 weeks after the product order is submitted.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center mb-4  pb-4 order-2 order-sm-2 order-md-2 order-lg-2">
                        <img className="w-50 fixed rounded-3" src={service1} alt="tiger" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAsked;