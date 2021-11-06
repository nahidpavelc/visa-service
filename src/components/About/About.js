import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            {/* header  */}
            <div class="image-banner" style={{ background: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://i.ibb.co/PxPTMSF/header.jpg")', }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="lg-text">ABOUT US</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* card  */}
                <div class="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div class="row g-0">
                        <h2 class="card-title m-5" style={{ color: '#3A3934', paddingTop: '40px', }}>U Visa Consulting</h2>
                        <div class="col-md-6" style={{ paddingTop: '20px', }}>
                            <img
                                class="img-fluid rounded-start"
                                src="https://images.unsplash.com/photo-1432611185496-76ccd1dc5efe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                                alt="new"
                            />
                        </div>
                        <div class="col-md-6" style={{ paddingTop: '20px', }}>
                            <div class="card-body">
                                <p class="card-text">There anyone who loves or pursues nor desires to obtain pain of itself, bet it is pain, but because occasionally can non dis nostra integer eleifend eros nulla senectus</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-circle-right"></i> Our Mission</h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}> <i class="fas fa-chevron-circle-right"></i> Our Strategy</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Employee  */}
                <div>
                    <div class="container-xl">
                        <div class="row">
                            <div class="col-lg-8 mx-auto py-5">
                                <h2 className="m-5">Testimonials</h2>
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    {/* <!-- Carousel indicators --> */}
                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                    {/* <!-- Wrapper for carousel items --> */}
                                    <div class="carousel-inner pb-5">
                                        <div class="carousel-item active">
                                            <div class="img-box"><img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" class="about-img" alt="..." /></div>
                                            <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                            <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="img-box"><img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80" class="about-img" alt="..." /></div>
                                            <p class="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                            <p class="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="img-box"><img src="https://images.unsplash.com/photo-1580309237429-661ea7cd1d53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="about-img" alt="..." /></div>
                                            <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                            <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                                        </div>
                                    </div>
                                    {/* <!-- Carousel controls --!> */}
                                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                        <i class="fa fa-angle-left"></i>
                                    </a>
                                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;