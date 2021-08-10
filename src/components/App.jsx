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


    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0) {
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }
    

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/**Button will be here for previous book */}
                        <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        {/**Book will be displayed with cover here */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/**Button will be here for next book */}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default App;