import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Navbar/Navbar';
import LeaderBoard from '../Leaderboard/Leaderboard';
import './Hub.css';
import Workouts from '../Workouts/Workouts';
import heAPI from '../../util/heAPI';
import Home from '../Home/Home';


const Hub = ({ name }) => {
    return (
        <React.Fragment>
            <NavBar />
            <h1 id="welcome">Welcome, {name}!</h1>
            {/* add workouts */}
            <div id="wrap-buttons">
                <button className="btn-next" onClick={() => ReactDOM.render(<Workouts username={name}/>, document.getElementById('root'))}>Add workout progress</button>
                {/* go to leaderboard */}
                <button className="btn-next" onClick={() => ReactDOM.render(<LeaderBoard username={name}/>, document.getElementById('root'))}>Leaderboard</button>
                {/* delete account */}
                <button className="btn-next" onClick={() => {
                    heAPI.delete(name)
                    ReactDOM.render(<Home/>, document.getElementById('root'));
                }}>Delete account</button>
            </div>
        </React.Fragment>
    );
};

export default Hub;