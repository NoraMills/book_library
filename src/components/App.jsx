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
        ];
        this.state = {
            bookNumber: 2
        };
    }

render() {
    return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                <div className="col-md-4">
                    {/**Button will be here for previous book */}
                </div>
                <div className="col-md-4">
                    {/**Book will be displayed with cover here */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                <div className="col-md-4">
                    {/**Button will be here for next book */}
                </div>
                </div>
               
            </div>
        )
    }   
}

export default App;