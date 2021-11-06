import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCart = (props) => {

    const { name, img } = props.item;

    return (
        <div>
            <div className="container mb-5">
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi exercitationem, expedita odit qui nisi dolores cumque id.
                            </Card.Text>
                            <button type="button" class="btn btn-outline-primary">Learn More</button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ServiceCart;