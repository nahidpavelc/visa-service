import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoachinCart from '../CoachingCart/CoachinCart';
import './Coaching.css'
import img1 from '../../images/coaching/PhotoShowImage_webdevcode.com_20211004204233.jpg'

const Coaching = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./coaching.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div >
            {/* header  */}
            <div class="image-banner" style={{ background: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://i.ibb.co/PxPTMSF/header.jpg")', }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="lg-text">COACHING</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <div className="header-margin ">
                    <p>STUDY FOR ABROAD</p>
                    <h2>Coaching For Immigration</h2>
                </div>

                <Row xs={2} md={3} className="g-4">
                    {
                        items.map(item => <CoachinCart item={item}></CoachinCart>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Coaching;