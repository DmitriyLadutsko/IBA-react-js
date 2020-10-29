import React, {Component} from "react";
import axios from 'axios';

const {Provider, Consumer} = React.createContext(undefined);

class CardContextProvider extends Component {
    _url = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

    state = {
        cards: [],
        onlyView: false,
        error: false,
    };

    cardsToRemove = [];

    checkBoxAppHandler = () => {
        this.setState({onlyView: !this.state.onlyView});
    };

    addCardHandler = () => {
        const cards = [...this.state.cards];
        const lastCard = cards[cards.length - 1];
        const newCard = {
            id: '' + (+lastCard.id + 1),
            caption: 'This is a new Card',
            text: 'Card description',
        };
        cards.push(newCard);
        this.setState({cards: cards});
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
            .catch(() => this.setState({error: true}));
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
                error: this.state.error,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {CardContextProvider, Consumer as CardContextConsumer};