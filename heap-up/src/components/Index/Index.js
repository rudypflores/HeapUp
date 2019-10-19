import React, { useState } from 'react';
import heAPI from '../../util/heAPI';
import './index.css';


const Index = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState({
        foot:0,
        inch:0
    });

    const handleSubmit = event => {
        event.preventDefault();
        //send to database
        let user = {
            name: name,
            gender: gender,
            age: age,
            weight: weight,
            height: {
                foot:height.foot,
                inch:height.inch
            }
        }

        
    };

    return (
        <div id="index">
            <form id="index-form" onSubmit={handleSubmit}>
            <h1 id="instructions">Answer the following questions to begin:</h1>
                <input id="name" className="text-input" type="text" placeholder="Name" required onChange={event => setName(event.target.value)}/>
                <input id="gender" className="text-input" type="text" placeholder="Gender" required onChange={event => setGender(event.target.value)}/>
                <input id="age" className="num-input" type="number" placeholder="Age" required onChange={event => setAge(event.target.value)}/>
                <input id="weight" className="num-input" type="number" min="1" placeholder="Weight (lbs)" required onChange={event => setWeight(event.target.value)}/>
                <label id="height">Your height in:</label>
                <input id="height-foot" className="num-input" type="number" placeholder="Foot" required onChange={event => setHeight({foot: event.target.value, inch: height.inch})}/>
                <input id="height-inch" className="num-input" type="number" placeholder="Inches" required onChange={event => setHeight({foot: height.foot, inch: event.target.value})}/>
                <input id="submit" type="submit"/>
            </form>
        </div>
    );
};

export default Index;