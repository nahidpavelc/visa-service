import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CountryCart from '../CountryCart/CountryCart';
import './Country.css';
import img1 from '../../images/coaching/PhotoShowImage_webdevcode.com_20211004204233.jpg';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('./country.JSON')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div >
            {/* header  */}
            <div class="image-banner" style={{ background: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://i.ibb.co/PxPTMSF/header.jpg")', }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="lg-text">COUNTRY</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="header-margin">
                    <p>POPULAR COUNTRY</p>
                    <h2>Immigration Country</h2>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        countries.map(country => <CountryCart country={country} ></CountryCart>)
                    }
                </div>
            </div>
            <div>




            </div>


        </div>
    );
};

export default Country;