import React, { Component } from "react";
import './App.css';
import Header from './Header';
import Card from './Card'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Card />
            </div>
        );
    }

}

export default App;