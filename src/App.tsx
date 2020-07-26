import React, {Component} from 'react';
import './scss/App.scss';
import logo from './logo.png';
import computing from './jsons/computing.json';
import resultsYear3 from './jsons/resultsYear3.json';
import TidyTree from './components/TidyTree';
import Timeline from './components/Timeline';
import BarChart from './components/BarChart';

let d3js = 'https://d3js.org/';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-Header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>David W. Arnold</h1>
                    <p>Welcome, below are several sections of my <a className="App-link" target="_blank"
                                                                    href={process.env.PUBLIC_URL + '/David_W_Arnold-CV.pdf'}
                                                                    rel="noopener noreferrer">CV</a> recreated using
                        the <a className="App-link" target="_blank" href={d3js}
                               rel="noopener noreferrer">D3.js</a> JavaScript library.</p>
                </header>
                <hr/>
                <div className="computing">
                    <h3>Example 1</h3>
                    <p>Data-driven visualisation of the Computing section of my CV:</p>
                    <TidyTree data={computing}/>
                </div>
                <hr/>
                <div className="eduExp">
                    <h3>Example 2</h3>
                    <p>Data-driven visualisation of the Education and Experience sections of my CV:</p>
                    <Timeline/>
                </div>
                <hr/>
                <div className="resultsYear3">
                    <h3>Example 3</h3>
                    <p>Data-driven visualisation of my final year results from University of Kent, as shown on my
                        CV:</p>
                    <BarChart data={resultsYear3}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default App;
