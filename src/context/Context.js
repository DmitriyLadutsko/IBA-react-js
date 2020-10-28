import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const {Provider, Consumer} = React.createContext(undefined);

class CardContextProvider extends Component {
    _url = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

    state = {
        cards: [],
        onlyView: false,
        error: false
    };

    cardsToRemove = [];

    checkBoxAppHandler = () => {
        this.setState({onlyView: !this.state.onlyView});
    };

    addCardHandler = () => {
        axios.get(this._url)
            .then(response => {
                const min = this.state.cards.length;
                const max = response.data.length;
                const rndId = Math.floor(Math.random() * (max - min + 1) + min);

                const card = this._transformPokemon(response.data[rndId]);
                const newCards = [...this.state.cards, card];
                this.setState({cards: newCards});
            })
            .catch(err => this.setState({error: true}));
    };

    cardToRemoveHandler = (id, state) => {
        if (state) {
            this.cardsToRemove.push(id);
        } else {
            this.cardsToRemove = this.cardsToRemove.filter(value => value !== id);
        }
    };

    removeCardHandler = () => {
        let cards = [...this.state.cards];
        cards = cards.filter(value => !this.cardsToRemove.includes(value.id));
        this.setState({cards: cards});
    };

    changeCardHandler = id => (caption, text) => {
        const {cards} = this.state;
        const cardIndex = cards.findIndex(card => card.id === id);
        const card = {...cards[cardIndex]};

        card.caption = caption;
        card.text = text;

        const newCards = [...cards];
        newCards[cardIndex] = card;

        this.setState({cards: newCards})
    };

    _transformPokemon = (pokemon) => {
        return {
            id: pokemon.Number,
            caption: pokemon.Name,
            text: pokemon.About
        }
    };

    componentDidMount() {
        axios.get(this._url)
            .then(response => {
                const pokemons = response.data.slice(0, 15);
                const cards = pokemons.map(this._transformPokemon)
                this.setState({cards: cards})
            })
            .catch(err => this.setState({error: true}));
    };

    render() {
        return (
            <Provider value={{
                cards: this.state.cards,
                cardsCount: this.state.cards.length,
                onlyView: this.state.onlyView,
                onCheckBoxApp: this.checkBoxAppHandler,
                onAdd: this.addCardHandler,
                removeCard: this.cardToRemoveHandler,
                onRemove: this.removeCardHandler,
                changeCard: this.changeCardHandler,
                error: this.state.error
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {CardContextProvider, Consumer as CardContextConsumer};