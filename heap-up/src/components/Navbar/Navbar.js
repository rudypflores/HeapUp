import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo.svg';

const Navbar = () => {
    return(
        <div id="navbar">
            <img src={Logo} id="logo" alt="logo"/>
        </div>
    );
};

export default Navbar;