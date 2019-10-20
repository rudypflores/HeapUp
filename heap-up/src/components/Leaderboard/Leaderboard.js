import React, { useState, useEffect } from 'react';
import './leaderboard.css';
import Card from './Card';
import heAPI from '../../util/heAPI';


const Leaderboard = () => {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            const users = await heAPI.get();
            const temp = [];
            const profiles = [];
        
            for(let user of users) {
                await temp.push(user.records.pop());
                await profiles.push({ name: user.name, gender: user.gender });
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
        <div id="Leaderboard">
            <h1 id="title-board">Leaderboard</h1>

            {record.map(r => {
                return <Card key={r.toString()+Math.random()} name={r.name} gender={r.gender} age={r.age} weight={r.weight} bench={r.bench} squat={r.squat} dlift={r.deadlift}/>
            })}
        </div>
    );
};

export default Leaderboard;