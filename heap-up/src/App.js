import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import LeaderBoard from './components/Leaderboard/Leaderboard';

const App = () => {

  return (
    <React.Fragment>
        <Navbar />

        {/* all pages */}
        <Index />
        <LeaderBoard />

    </React.Fragment>
  );
}

export default App;
