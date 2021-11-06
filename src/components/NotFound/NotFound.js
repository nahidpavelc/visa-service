import React from 'react';
import logo from '../../images/pngwing.png';
import { Image } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="text-center m-5">
            <h1 className="text-center m-5">Refresh Page</h1>
            <img src={logo} alt="Logo" />;
        </div>
    );
};

export default NotFound;