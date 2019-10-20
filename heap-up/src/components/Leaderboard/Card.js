import React from 'react';


const Card = ({ name, gender, age, weight, bench, squat, dlift }) => {
    return(
        <div id="table">
            <div className="row">
                <div className="key"><p>name</p></div>
                <div className="value"><p>{name}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Gender</p></div>
                <div className="value"><p>{gender}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Age</p></div>
                <div className="value"><p>{age}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Weight</p></div>
                <div className="value"><p>{weight}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Bench</p></div>
                <div className="value"><p>{bench}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Squat</p></div>
                <div className="value"><p>{squat}</p></div>
            </div>
            <div className="row">
                <div className="key"><p>Dead Lift</p></div>
                <div className="value"><p>{dlift}</p></div>
            </div>
        </div>
    );
};

export default Card;