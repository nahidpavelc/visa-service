import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'

// const Header = () => {
//     return (

//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//                 <Navbar.Brand href="#home">
//                     <img src={logo} alt="" />
//                     React-Bootstrap</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link className="nav-item" href="/Home">Home</Nav.Link>
//                         <Nav.Link className="nav-item" href="/coaching">Coaching</Nav.Link>
//                         <Nav.Link className="nav-item" href="/Service">Services</Nav.Link>
//                         <Nav.Link className="nav-item" href="/Country">Country</Nav.Link>
//                         <Nav.Link className="nav-item" href="/About">About us</Nav.Link>


//                         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav >
//                         <Nav.Link className="nav-item" href="#deets">Sign in</Nav.Link>
//                         <Nav.Link className="nav-item" href="#memes">
//                             Sign up
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Header;

//-----------------//-------------Type1 No loding-----//
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand " href="#">
                        <img className="logo pe-3" src={logo} alt="" />
                        U VISA
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/Home"> Home</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/Service">Services</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/coaching"> Coaching</NavLink></a>
                                </li>

                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/Country">Country</NavLink></a>
                                </li>
                                <a></a>
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/about"> About us</NavLink></a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-nav ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/login">Log-in</NavLink></a>
                                </li>
                                <a></a>
                                <li className="nav-item">
                                    <a><NavLink className="nav-link" to="/signup">Sign-up</NavLink></a>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </nav>
        </div>
    );
};

export default Header;