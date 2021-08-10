import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Nineteen Eighty-Four", author: "George Orwell"},
            {title: "Our Martyred Lady", author: "Gav Thorpe"},
            {title: "Simulacra and Simulation", author: "Jean Baudrillard"},
        ]
        this.state = {};
    }

render() {
    return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        )
    }   
}

export default App;