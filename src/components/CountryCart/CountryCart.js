import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './CountryCart.css';

const CountryCart = (props) => {
    console.log(props.country)
    const { img, name, capital } = props.country;

    return (
        <div>
            <Col>
                <Card className="card-shadow ">
                    <Card.Img className="country-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <button type="button" class="btn btn-outline-primary">Learn More</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CountryCart;