import React from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Carousel, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import slide1 from '../../images/Home/slide (2).jpg';
import slide2 from '../../images/Home/slide.jpg';

const Home = () => {

    return (
        <div>
            {/* slide */}
            <div >
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h1>U Visa Agency</h1>
                            <p>Since 1980 we are experts in the global industry</p>
                            <button className="btn btn-primary">Contact us <i class="fas fa-arrow-right"></i></button>
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Aboard Immigration</h1>
                            <p>Since 1980 we are experts in the global industry</p>
                            <button className="btn btn-primary">Contact us  <i class="fas fa-arrow-right"></i></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* About us */}
            <div className="container container-mar d-flex justify-content-around">

                <div class="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img
                                class="img-fluid rounded-start"
                                src="https://images.unsplash.com/photo-1432611185496-76ccd1dc5efe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                                alt="new"
                            />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">

                                <h2 class="card-title" style={{ color: '#3A3934' }}>25+ Experiences in Visa <br /> Service</h2>
                                <p class="card-text">There anyone who loves or pursues nor desires to obtain pain of itself, bet it is pain, but because occasionally can non dis nostra integer eleifend eros nulla senectus</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-circle-right"></i> Our Mission</h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}> <i class="fas fa-chevron-circle-right"></i> Our Strategy</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Service  */}
            <div className="container">

                <p className="text-center">OUR SERVICE</p>
                <h2 className="ser-txt">Service We Provide</h2>
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    <div class="col">
                        <div class="card h-100 card-shadow">
                            <img src="https://media.istockphoto.com/photos/the-american-visa-in-a-passport-page-picture-id474633626?b=1&k=20&m=474633626&s=170667a&w=0&h=hjd9KA6C3mmlOAo93NfEsH3bSEmGlpx46KymIAmSJ9s=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Education Visa</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 card-shadow">
                            <img src="https://media.istockphoto.com/photos/her-travel-documents-are-in-order-picture-id882850594?b=1&k=20&m=882850594&s=170667a&w=0&h=sIosDEvyT4FEuAxiXMo7y7X0a5mIzwlVJaDniR1fx2g=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Business Visa</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 card-shadow">
                            <img src="https://media.istockphoto.com/photos/woman-holding-passport-filling-visa-application-form-on-the-laptop-picture-id1277089334?b=1&k=20&m=1277089334&s=170667a&w=0&h=eIjxkqOFDgt83LMhPw19-zVwKdZISf0EOst5hFYiJvQ=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Family Visa</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 card-shadow">
                            <img src="https://media.istockphoto.com/photos/green-card-or-permanent-resident-card-and-employment-authorization-picture-id877497140?b=1&k=20&m=877497140&s=170667a&w=0&h=mKdfIFbdQUOn6Xvjk7gQkoAHpOcrLTD9tJynw6l5LTg=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tourist Visa</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/*Provide Experts */}
            <div className="container container-mar d-flex justify-content-around">

                <div class="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card-body">
                                <p className="text-center">WHY CHOOSE US</p>
                                <h2 class="card-title" style={{ color: '#3A3934' }}>Eastend Visa Consulting</h2>
                                <p class="card-text">We Provide Experts To Create Great Value For Your Visa</p>

                                <h4 style={{ color: '#3A3934' }}> <i class="fas fa-chevron-right"></i>  Real Time Status </h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-right"></i> Experience Expert Team</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-right"></i> Live Chat With Our Team</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <img
                                class="img-fluid rounded-start"
                                src="https://images.unsplash.com/photo-1536158614364-49b81421db1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                                alt="new"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Customare  */}
            <div className="container">
                <p className="text-center">TESTIMONIAL</p>
                <h2 className="ser-txt">Customer Feedback</h2>

                <div className="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h3><i class="fas fa-users"></i></h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img class="img-round" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Jhon Adam</h5>
                                    <p class="card-text">Poland</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h3><i class="fas fa-users"></i></h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img class="img-round" src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Robert K.</h5>
                                    <p class="card-text">Netherland</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h3><i class="fas fa-users"></i></h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img class="img-round" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Ahmed Hussain</h5>
                                    <p class="card-text">Turkey</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            {/* Country  */}
            <div className="container container-mar justify-content-center">
                <div className="text-center header-margin">
                    <p>POPULAR COUNTRY</p>
                    <h2>Immigration Country!</h2>
                </div>

                <div class="row row-cols-1 row-cols-md-6 g-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/153-united-states-of-america_new.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/262-united-kingdom.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/130-australia.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/206-canada.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2020/01/097-switzerland.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/141-singapore.png" class="card-img-top" alt="..." />
                        </div>
                    </div>

                </div>
            </div>





        </div >
    );
};
export default Home;