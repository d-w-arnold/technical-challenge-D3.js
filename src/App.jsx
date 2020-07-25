import React, {Component} from 'react';
import './App.scss';
import logo from './logo.png';
import BarChart from './components/BarChart';

let d3js = 'https://d3js.org/';
let fruit = [
    {name: "🍊", value: 21},
    {name: "🍇", value: 13},
    {name: "🍏", value: 8},
    {name: "🍌", value: 5},
    {name: "🍐", value: 3},
    {name: "🍋", value: 2},
    {name: "🍎", value: 1},
    {name: "🍉", value: 1}
]

class App extends Component {
    render() {
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
                    <p>A data-driven visualisation of my University of Kent (year 3) results from Uni, as shown on my CV.</p>
                    <BarChart data={fruit}/>
                </div>
            </div>
        );
    }
}

export default App;
