import React from 'react';
import ReactDOM from 'react-dom'
import logo from '../../images/study.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {

    const element = <FontAwesomeIcon icon={faAddressBook} />

    return (
        <div >

            <div className="container">
                <div className="card-group">
                    <div className="card fo-card">
                        <div className="card-body">
                            <h3 className="card-title">
                                {/* <img className="logo pe-3" src={logo} alt=""/> */}
                                U VISA</h3>
                            <hr />
                            <p className="card-text">
                                There anyone who loves pursues not some great to have pleasure.
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                We are immigration company to pulled word and phrases from the humanitarian to come up with winning chunks of lorem.
                            </p>
                        </div>
                        <div className="card-footer d-flex justify-content-start" style={{ paddingTop: 0 }}>
                            <Link><i class="fab fa-facebook-square footer-icon"></i></Link>
                            <Link><i class="fab fa-instagram footer-icon"></i></Link>
                            <Link><i class="fab fa-twitter-square footer-icon"></i></Link>
                            <Link><i class="fab fa-youtube-square footer-icon"></i></Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3>Visa Types</h3>
                            <hr />
                            <a className="font-style" href="#">- Busienss Visa </a><br />
                            <a className="font-style" href="#">- Student Visa </a><br />
                            <a className="font-style" href="#">- Family Visa </a><br />
                            <a className="font-style" href="#">- Work Visa </a><br />
                            <a className="font-style" href="#">- Immigrate Visa </a><br />
                            <a className="font-style" href="#">- Transit Visa </a><br />
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Top Country</h3>
                            <hr />
                            <a className="font-style" href="#">- United States </a><br />
                            <a className="font-style" href="#">- Australia </a><br />
                            <a className="font-style" href="#">- United Kingdom </a><br />
                            <a className="font-style" href="#">- Switzerland </a><br />
                            <a className="font-style" href="#">- Malaysia </a><br />
                            <a className="font-style" href="#">- Singapore </a><br />
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">

                            <h3 className="card-title">Newsletter</h3>
                            <hr />
                            <form class="row g-3">
                                <label >
                                    <input type="text" class="form-control" placeholder="Email" />
                                </label>
                                <div class="col-auto">
                                    <button type="button" class="btn btn-primary">Send</button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>

            <div >
                <p className="bottom-footer"><i class="far fa-copyright"></i> 2021 U VISA —@NAHID</p>
            </div>


        </div >

    );
};

export default Footer;