import React, { useState } from 'react';
import heAPI from '../../util/heAPI';
import './SignUp.css';
import Leaderboard from '../Leaderboard/Leaderboard';
import Navbar from '../Navbar/Navbar';


const SignUp = () => {
    const [active, setActive] = useState(true);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState({
        foot:0,
        inch:0
    });

    const handleSubmit = event => {
        event.preventDefault();
        //send to database
        let user = {
            // email:email,
            // username:username,
            // password:password,
            name: name,
            gender: gender,
            age: age,
            height: {
                foot:height.foot,
                inch:height.inch
            }
        }
        heAPI.post(user);
        setActive(false);
    };

    //Renders componenent only when initial log in happens
    const render = () => {
        return (
            <div id="index">
                <form autoComplete="off" id="index-form" onSubmit={handleSubmit}>
                    <input autoComplete="false" name="hidden" type="text" style={{display:"none"}}/>
                    <h1 id="instructions">Sign up</h1>

                    <label className="description">Enter your desired credentials</label>
                    <input id="email" className="text-input" type="text" placeholder="Email" required onChange={event => setEmail(event.target.value)}/>
                    <input id="username" className="text-input" type="text" placeholder="Username" required onChange={event => setUsername(event.target.value)}/>
                    <input id="password" className="text-input" type="text" placeholder="Password" required onChange={event => setPassword(event.target.value)}/>

                    <label className="description">Personal Information</label>
                    <input id="name" className="text-input" type="text" placeholder="Name" required onChange={event => setName(event.target.value)}/>
                    <input id="gender" className="text-input" type="text" placeholder="Gender" required onChange={event => setGender(event.target.value)}/>
                    <input id="age" className="num-input" type="number" placeholder="Age" required onChange={event => setAge(event.target.value)}/>

                    <label className="description">Your height in</label>
                    <input id="height-foot" className="num-input" type="number" placeholder="Foot" required onChange={event => setHeight({foot: event.target.value, inch: height.inch})}/>
                    <input id="height-inch" className="num-input" type="number" placeholder="Inches" required onChange={event => setHeight({foot: height.foot, inch: event.target.value})}/>

                    <input id="submit" type="submit" value="Continue"/>
                </form>
            </div>
        );
    };

    return (
        <React.Fragment>
            <Navbar/>
            {active === true ? render() : <Leaderboard />}
        </React.Fragment>
    );
};

export default SignUp;