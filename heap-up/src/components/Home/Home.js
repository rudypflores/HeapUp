import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import Logo from '../../img/logo.svg';
import SignUp from '../Index/SignUp';


const Home = () => {
    const handleSignUp = () => {
        ReactDOM.render(<SignUp/>, document.getElementById('root'));
    };

    const handleSignIn = () => {
        //render sign in
    };
    return (
        <div id="home">
            <img src={Logo} alt="logo" id="logo-home"/>
            <div id="container-row-home">
                <button className="btn-next" onClick={handleSignUp}>Sign up</button>
                <button className="btn-next" onClick={handleSignIn}>Sign in</button>
            </div>
        </div>
    );
};

export default Home;