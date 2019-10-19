import React from 'react';
import './index.css';


const Index = () => {
    return (
        <div id="index">

            <h1 id="instructions">Answer the following questions to begin:</h1>
            <form id="index-form">
                <input id="name" className="text-input" type="text" placeholder="Name" required/>
                <input id="gender" className="text-input" type="text" placeholder="Gender" required/>
                <input id="age" className="num-input" type="number" placeholder="Age" required/>
                <input id="weight" className="num-input" type="number" min="1" placeholder="Weight (lbs)" required/>
                <input id="bench" className="num-input" type="number" min="1" placeholder="Bench: One rep max (lbs)"/>
                <input id="squat" className="num-input" type="number" min="1" placeholder="Squat: One rep max (lbs)"/>
                <input id="deadlift" className="num-input" type="number" min="1" placeholder="Dead Lift: One rep max (lbs)"/>

                <input id="submit" type="submit"/>
            </form>
        </div>
    );
};

export default Index;