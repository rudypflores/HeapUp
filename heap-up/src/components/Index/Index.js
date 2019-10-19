import React from 'react';
import './index.css';


const Index = () => {

    return (
        <div id="index">
            <form id="index-form">
                <input id="name" type="text" placeholder="name"/>
                <input id="weight" type="number" min="1" placeholder="weight"/>
                <input id="submit" type="submit"/>
            </form>
        </div>
    );
};

export default Index;