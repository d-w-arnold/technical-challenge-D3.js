import React from 'react';
import './App.scss';
import logo from './logo.png';

function App() {
    let d3js = 'https://d3js.org/';
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>David W. Arnold</h1>
                <p>Welcome, below are several sections of my <a className="App-link" target="_blank" href={process.env.PUBLIC_URL + '/David_W_Arnold-CV.pdf'} rel="noopener noreferrer">CV</a> recreated using the <a className="App-link" target="_blank" href={d3js} rel="noopener noreferrer">D3.js</a> JavaScript library.</p>
            </header>
            <div className="computing">
                <p>A data-driven visualisation of the Computing section of my CV.</p>
            </div>
            <div className="education">
                <p>A data-driven visualisation of the Education section of my CV.</p>
            </div>
            <div className="uni_year_3">
                <p>A data-driven visualisation of the University of Kent year 3 module results, as hown on my CV.</p>
            </div>
        </div>
    );
}

export default App;
