import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';

const App = () => {

  return (
    <React.Fragment>
        <Navbar />

        {/* all pages */}
        <Index />


    </React.Fragment>
  );
}

export default App;
