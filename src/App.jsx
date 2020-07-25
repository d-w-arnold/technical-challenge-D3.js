import React, {Component} from 'react';
import './App.scss';
import logo from './logo.png';
import BarChart from './components/BarChart';

let d3js = 'https://d3js.org/';
let resultsYear3 = [
    {name: "Computer Security and Cryptography", value: 92},
    {name: "Computer Networks and Communication", value: 88},
    {name: "Programming Language Implementation", value: 88},
    {name: "Programming Languages: Application and Design", value: 88},
    {name: "Data Mining and Knowledge Discovery", value: 82},
    {name: "Research Project", value: 72},
    {name: "Internet of Things", value: 70}
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
                    <BarChart data={resultsYear3}/>
                </div>
            </div>
        );
    }
}

export default App;
