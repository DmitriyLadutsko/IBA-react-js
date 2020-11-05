import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from "axios";
import {onAddCardsFromServer, onHaveError} from './store/actions';

import Header from './components/Header';
import CardBuilder from "./containers/CardsBuilder";
import SignIn from "./containers/SignIn";
import FullCard from "./containers/FullCard";
import NotFound from "./components/UI/NotFound";

class App extends Component {

    _url = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';


    componentDidMount() {
        axios.get(this._url)
            .then(response => {
                const pokemons = response.data.slice(0, 15);
                const cards = pokemons.map(this._transformPokemon)
                this.props.onAddCardsFromServer(cards)
            })
            .catch(() => this.props.onHaveError);
    };

    _transformPokemon = (pokemon) => {
        return {
            id: +pokemon.Number,
            caption: pokemon.Name,
            text: pokemon.About
        }
    };

    render() {

        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/cards/:id" component={FullCard} />
                    <Route path="/" exact component={CardBuilder} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = {
        onAddCardsFromServer,
        onHaveError
}

export default connect(null, mapDispatchToProps)(App);