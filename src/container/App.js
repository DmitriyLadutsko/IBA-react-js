import React, {Component} from "react";
import './App.css';
import styled from 'styled-components';

import Header from '../components/Header';
import CardList from '../components/CardList';

class App extends Component {
    state = {
        cards: [
            {
                id: '11',
                caption: 'Nervous System',
                text: 'The nervous system is the major controlling, regulatory, and communicating system in the body.',
                isActive: false
            },
            {
                id: '12',
                caption: 'Muscular System',
                text: 'The muscular system is composed of specialized cells called muscle fibers.',
                isActive: false
            },
            {
                id: '13',
                caption: 'Endocrine System',
                isActive: false,
                text: 'The endocrine system, along with the nervous system, functions in the regulation of body activities.'
            },
            {
                id: '14',
                caption: 'Cardiovascular System',
                isActive: false,
                text: 'The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system.'
            },
            {
                id: '19',
                caption: 'Respiratory System',
                isActive: false,
                text: 'When the respiratory system is mentioned, people generally think of breathing, but breathing is only one of the activities of the respiratory system.'
            },
            {
                id: '15',
                caption: 'Digestive System',
                isActive: false,
                text: 'The digestive system includes the digestive tract and its accessory organs, which process food into molecules that can be absorbed and utilized by the cells of the body. '
            },
            {
                id: '16',
                caption: 'Skeletal System',
                isActive: false,
                text: 'Humans are vertebrates, animals having a vertabral column or backbone.'
            },
            {
                id: '17',
                caption: 'Reproductive System',
                isActive: false,
                text: 'The major function of the reproductive system is to ensure survival of the species.'
            },
            {
                id: '18',
                caption: 'Urinary System',
                isActive: false,
                text: 'The principal function of the urinary system is to maintain the volume and composition of body fluids within normal limits.'
            },
        ],
        isViewMode: false,
    }

    toggleViewModeHandler = () => {
        const doesShow = this.state.isViewMode;
        this.setState({isViewMode: !doesShow});
    }

    cardChangedHandler = id => (caption, text) => {

        const cardIndex = this.state.cards.findIndex(card => {
            return card.id === id;
        });
        const card = {...this.state.cards[cardIndex]};

        card.caption = caption;
        card.text = text;

        const cards = [...this.state.cards];
        cards[cardIndex] = card;

        this.setState({cards: cards})
    };

    cardActiveHandler = index => {
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

    render() {
        const StyledLabel = styled.label.attrs(() => ({
            for: 'checkbox'
        }))`
        color: darkmagenta;
        border: double darkmagenta;
        border-radius: 8px;
        margin: 20px;
        padding: 5px;
        cursor: pointer;
        `;

        const StyledButton = styled.button.attrs(() => ({
            onClick: this.cardDeleteHandler
        }))`
        color: darkmagenta;
        background-color: #f3cfcf;
        font-size: 16px;
        border-radius: 8px;
        margin: auto;
        padding: 5px;
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

        return (
            <div className="App">
                <Header/>
                <StyledCheckbox />
                <StyledLabel>
                    <i><b>View-only mode</b></i>
                </StyledLabel>
                <StyledButton>
                    Remove Checked Cards
                </StyledButton>
                <main>
                    <CardList
                        cards={this.state.cards}
                        viewMode={this.state.isViewMode}
                        cardChanged={this.cardChangedHandler}
                        activeChanged={this.cardActiveHandler}
                    />
                </main>
            </div>
        );
    }

}

export default App;