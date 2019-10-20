import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';
import Navbar from '../Navbar/Navbar';
import Hub from '../Hub/Hub';


const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        ReactDOM.render(<Hub name={username}/>, document.getElementById('root'));
    };

    return (
        <React.Fragment>
            <Navbar/>
            <form id="index-form" onSubmit={handleSubmit}>
                <h1 id="instructions">Sign In</h1>
                <label className="description">Enter your credentials to continue</label>
                <input id="username" className="text-input" type="text" placeholder="Username" required onChange={event => setUsername(event.target.value)}/>
                <input id="password" className="text-input" type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)}/>
                <input id="submit" type="submit" value="Continue"/>
            </form>
        </React.Fragment>
    );
};

export default SignIn;