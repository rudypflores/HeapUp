import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Workouts.css';
import heAPI from '../../util/heAPI';
import Hub from '../Hub/Hub';


const Workouts = ({ username }) => {

    const [weight, setWeight] = useState(0);
    const [bench, setBench] = useState(0);
    const [squat, setSquat] = useState(0);
    const [deadlift, setDeadlift] = useState(0);
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        heAPI.put({
            weight,
            bench,
            squat,
            deadlift,
            age
        }, username);
    };

    return (
        <React.Fragment>
            <form autoComplete="off" id="index-form" onSubmit={handleSubmit}>
                <input autoComplete="false" name="hidden" type="text" style={{display:"none"}}/>
                <h1 id="instructions">Register Workouts</h1>

                <label className="description">Enter your desired credentials</label>
                <input id="weight" className="num-input" type="number" placeholder="Weight" required onChange={event => setWeight(event.target.value)}/>
                <input id="bench" className="num-input" type="number" placeholder="Bench" required onChange={event => setBench(event.target.value)}/>
                <input id="squat" className="num-input" type="number" placeholder="Squat" required onChange={event => setSquat(event.target.value)}/>
                <input id="deadlift" className="num-input" type="number" placeholder="Deadlift" required onChange={event => setDeadlift(event.target.value)}/>
                <input id="age" className="num-input" type="number" placeholder="Age" required onChange={event => setAge(event.target.value)}/>

                <input id="submit" type="submit"/>
                <button className="btn-next" onClick={() => ReactDOM.render(<Hub name={username}/>, document.getElementById('root'))}>Return</button>
            </form>
        </React.Fragment>
    );
};

export default Workouts;