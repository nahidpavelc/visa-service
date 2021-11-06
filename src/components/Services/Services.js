import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';
import img1 from '../../images/header/header.jpg';

const Services = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            {/* header  */}
            <div class="image-banner" style={{ background: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(https://i.ibb.co/PxPTMSF/header.jpg)', }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="lg-text">OUR SERVICES</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="header-margin">
                    <p>OUR SERVICES</p>
                    <h2>Services We Provide</h2>
                </div>
                <Row xs={2} md={3} className="g-4">
                    {
                        items.map(item => <ServiceCart item={item}> </ServiceCart>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;