import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import Logo from '../../img/logo.svg';
import SignUp from '../Index/SignUp';
import SignIn from '../SignIn/SignIn';


const Home = () => {
    const handleSignUp = () => {
        ReactDOM.render(<SignUp />, document.getElementById('root'));
    };

    const handleSignIn = () => {
        ReactDOM.render(<SignIn />, document.getElementById('root'));
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