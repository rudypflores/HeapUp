import React from 'react';
import './leaderboard.css';
import Card from './Card';


const Leaderboard = () => {

    return (
        <div id="Leaderboard">
            <h1 id="title-board">Leaderboard</h1>
            <Card name={'Rudy'} gender={'Male'} age={21} weight={170} bench={1} squat={2} dlift={1}/>
            <Card name={'Tru'} gender={'Male'} age={20} weight={160} bench={2} squat={3} dlift={1}/>
            <Card name={'Daniel'} gender={'Male'} age={19} weight={176} bench={1} squat={2} dlift={1}/>
            <Card name={'Jose'} gender={'Male'} age={23} weight={166} bench={2} squat={1} dlift={2}/>
            <Card name={'David'} gender={'Male'} age={22} weight={180} bench={2} squat={4} dlift={1}/>
            <Card name={'Julio'} gender={'Male'} age={20} weight={160} bench={2} squat={3} dlift={2}/>
            <Card name={'Oscar'} gender={'Male'} age={24} weight={150} bench={1} squat={2} dlift={4}/>
            <Card name={'Hoaian'} gender={'Male'} age={22} weight={180} bench={3} squat={2} dlift={1}/>
        </div>
    );
};

export default Leaderboard;