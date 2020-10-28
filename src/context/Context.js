import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid';

const {Provider, Consumer} = React.createContext(undefined);

class CardContextProvider extends Component {
    state = {
        cards: [
            {
                id: uuidv4(),
                caption: 'Nervous System',
                text: 'The nervous system is the major controlling, regulatory, and communicating system in the body.',
            },
            {
                id: uuidv4(),
                caption: 'Muscular System',
                text: 'The muscular system is composed of specialized cells called muscle fibers.',
            },
            {
                id: uuidv4(),
                caption: 'Endocrine System',
                text: 'The endocrine system, along with the nervous system, functions in the regulation of body activities.',
            },
            {
                id: uuidv4(),
                caption: 'Cardiovascular System',
                text: 'The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system.',
            },
            {
                id: uuidv4(),
                caption: 'Respiratory System',
                text: 'When the respiratory system is mentioned, people generally think of breathing, but breathing is only one of the activities of the respiratory system.',
            },
            {
                id: uuidv4(),
                caption: 'Digestive System',
                text: 'The digestive system includes the digestive tract and its accessory organs, which process food into molecules that can be absorbed and utilized by the cells of the body.',
            },
            {
                id: uuidv4(),
                caption: 'Skeletal System',
                text: 'Humans are vertebrates, animals having a vertabral column or backbone.',
            },
            {
                id: uuidv4(),
                caption: 'Reproductive System',
                text: 'The major function of the reproductive system is to ensure survival of the species.',
            },
            {
                id: uuidv4(),
                caption: 'Urinary System',
                text: 'The principal function of the urinary system is to maintain the volume and composition of body fluids within normal limits.',
            },
        ],
        onlyView: false
    };

    cardsToRemove = [];

    checkBoxAppHandler = () => {
        this.setState({onlyView: !this.state.onlyView});
    };

    addCardHandler = () => {
        const card = {
            id: uuidv4(),
            caption: 'This is a new Card',
            text: 'Card description',
        };
        const newCards = [...this.state.cards, card];
        this.setState({cards: newCards});
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
        const cardIndex = cards
            .findIndex(card => {return card.id === id});
        const card = {...cards[cardIndex]};

        card.caption = caption;
        card.text = text;

        const newCards = [...cards];
        newCards[cardIndex] = card;

        this.setState({cards: newCards})
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
                changeCard: this.changeCardHandler
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {CardContextProvider, Consumer as CardContextConsumer};