import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './leaderboard.css';
import Card from './Card';
import heAPI from '../../util/heAPI';
import NavBar from '../Navbar/Navbar';
import Hub from '../Hub/Hub';


const Leaderboard = ({ username }) => {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            const users = await heAPI.get();
            const temp = [];
            const profiles = [];
        
            for(let user of users) {
                temp.push(user.records.pop());
                profiles.push({ name: user.name, gender: user.gender });
            }
            const result = temp.filter(t => t !== undefined);

            for(let i = 0; i < result.length; i++) {
                result[i]['name'] = profiles[i].name;
                result[i]['gender'] = profiles[i].gender;
            }

            setRecord(result);
        }
        fetchAPI();
    }, []);

    return (
        <React.Fragment>
        <NavBar />
        <div id="Leaderboard">
            <h1 id="title-board">Leaderboard</h1>
            {record.map(r => {
                return <Card key={r.toString()+Math.random()} name={r.name} gender={r.gender} age={r.age} weight={r.weight} bench={r.bench} squat={r.squat} dlift={r.deadlift}/>
            })}
            <div id="wrap-button">
            <button className="btn-next" onClick={() => ReactDOM.render(<Hub name={username}/>, document.getElementById('root'))}>Return</button>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Leaderboard;