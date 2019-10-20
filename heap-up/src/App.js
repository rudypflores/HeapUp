import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Leaderboard from './components/Leaderboard/Leaderboard';

const App = () => {

  return (
    <React.Fragment>
        <Leaderboard />
        {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
