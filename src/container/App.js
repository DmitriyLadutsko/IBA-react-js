import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import styled from 'styled-components';

import Header from '../components/Header';
import CardList from '../components/CardList';


class App extends Component {
    state = {
        cards: [
            {
                id: uuidv4(),
                caption: 'Nervous System',
                text: 'The nervous system is the major controlling, regulatory, and communicating system in the body.',
                isActive: false
            },
            {
                id: uuidv4(),
                caption: 'Muscular System',
                text: 'The muscular system is composed of specialized cells called muscle fibers.',
                isActive: false
            },
            {
                id: uuidv4(),
                caption: 'Endocrine System',
                text: 'The endocrine system, along with the nervous system, functions in the regulation of body activities.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Cardiovascular System',
                text: 'The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Respiratory System',
                text: 'When the respiratory system is mentioned, people generally think of breathing, but breathing is only one of the activities of the respiratory system.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Digestive System',
                text: 'The digestive system includes the digestive tract and its accessory organs, which process food into molecules that can be absorbed and utilized by the cells of the body.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Skeletal System',
                text: 'Humans are vertebrates, animals having a vertabral column or backbone.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Reproductive System',
                text: 'The major function of the reproductive system is to ensure survival of the species.',
                isActive: false,
            },
            {
                id: uuidv4(),
                caption: 'Urinary System',
                text: 'The principal function of the urinary system is to maintain the volume and composition of body fluids within normal limits.',
                isActive: false,
            },
        ],
        isViewMode: false,
    }

    toggleViewModeHandler = () => {
        const doesShow = this.state.isViewMode;
        this.setState({isViewMode: !doesShow});
    }

    cardChangedHandler = id => (caption, text) => {
        const { cards } = this.state;

        const cardIndex = cards.findIndex(card => {
            return card.id === id;
        });
        const card = {...cards[cardIndex]};

        card.caption = caption;
        card.text = text;

        const newCards = [...cards];
        newCards[cardIndex] = card;

        this.setState({cards: newCards})
    };

    toggleCardActiveHandler = index => {
        const newCards = this.state.cards.map((card, i) => {
            if (i === index) {
                return { ...card, isActive: !card.isActive };
            } else {
                return {...card};
            }
        });
        this.setState({ cards: newCards });
    };

    cardDeleteHandler = () => {
        const newCards = this.state.cards.filter((card) => !card.isActive);
        this.setState({ cards: newCards });
    }

    addCardHandler =() => {
        const card = {
            id: uuidv4(),
            caption: '',
            text: '',
            isActive: false
        };
        const newCards = [...this.state.cards, card];
        this.setState({ cards: newCards });
    }

    render() {
        const StyledLabel = styled.label.attrs(() => ({
            htmlFor: 'checkbox'
        }))`
        color: darkmagenta;
        border: double darkmagenta;
        border-radius: 8px;
        margin: 20px;
        padding: 5px;
        cursor: pointer;
        &:hover {
            color: white;
            background-color: darkmagenta;
        }
        `;

        const StyledCheckbox = styled.input.attrs(() => ({
            id: 'checkbox',
            type: 'checkbox',
            checked: this.state.isViewMode,
            onChange: this.toggleViewModeHandler
        }))`
        width: 18px;
        height: 18px;
            &:checked + ${StyledLabel} {
              background: darkmagenta;
              color: white;
            }
        `;

        const BrownButton = styled.button`
        color: white;
        background-color: brown;
        font-weight: bold;
        font-size: 16px;
        border: double brown;
        border-radius: 8px;
        margin: auto;
        padding: 5px;
        &:hover {
            color: brown;
            background-color: lightgrey;
            
        }
        `;

        const OrangeButton = styled.button`
        color: white;
        background-color: #FF9800;
        font-weight: bold;
        font-size: 16px;
        border: double #FF9800;
        border-radius: 8px;
        margin: auto 10px;
        padding: 5px;
        &:hover {
            color: #FF9800;
            background-color: #f6ddb79c;
        }
        `;

        return (
            <div className="App">
                <Header/>
                <StyledCheckbox />
                <StyledLabel >
                    <i><b>View-only mode</b></i>
                </StyledLabel>
                <BrownButton onClick={this.cardDeleteHandler} >
                    Remove Checked Cards
                </BrownButton>
                <OrangeButton onClick={this.addCardHandler} >
                    Add Card
                </OrangeButton>
                <main>
                    <CardList
                        cards={this.state.cards}
                        viewMode={this.state.isViewMode}
                        cardChanged={this.cardChangedHandler}
                        activeChanged={this.toggleCardActiveHandler}
                    />
                </main>
            </div>
        );
    }

}

export default App;