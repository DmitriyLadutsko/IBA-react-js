import React, {Component} from "react";
import './App.css';
import Header from './Header';
import Card from './Card'

class App extends Component {
    state = {
        cards: [
            {
                id: '11',
                caption: 'Nervous System',
                text: 'The nervous system is the major controlling, regulatory, and communicating system in the body. '
            },
            {
                id: '12',
                caption: 'Muscular System',
                text: 'The muscular system is composed of specialized cells called muscle fibers.'
            },
            {
                id: '13',
                caption: 'Endocrine System',
                text: 'The endocrine system, along with the nervous system, functions in the regulation of body activities.'
            },
            {
                id: '14',
                caption: 'Cardiovascular System',
                text: 'The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system.'
            },
            {
                id: '19',
                caption: 'Respiratory System',
                text: 'When the respiratory system is mentioned, people generally think of breathing, but breathing is only one of the activities of the respiratory system.'
            },
            {
                id: '15',
                caption: 'Digestive System',
                text: 'The digestive system includes the digestive tract and its accessory organs, which process food into molecules that can be absorbed and utilized by the cells of the body. '
            },
            {
                id: '16',
                caption: 'Skeletal System',
                text: 'Humans are vertebrates, animals having a vertabral column or backbone.'
            },
            {
                id: '17',
                caption: 'Reproductive System',
                text: 'The major function of the reproductive system is to ensure survival of the species.'
            },
            {
                id: '18',
                caption: 'Urinary System',
                text: 'The principal function of the urinary system is to maintain the volume and composition of body fluids within normal limits.'
            },
        ],
        isViewMode: false,
    }

    toggleViewModeHandler = () => {
        const doesShow = this.state.isViewMode;
        this.setState({isViewMode: !doesShow});
    }

    cardChangedHandler = (caption, text, id) => {

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

    render() {
        const listCards = this.state.cards.map((card) =>
            <Card
                key={card.id}
                cardInfo={card}
                viewMode={this.state.isViewMode}
                changedCaption={(caption, text) =>
                    this.cardChangedHandler(caption, text, card.id,)}
            />)

        return (
            <div className="App">
                <Header/>
                <label><i><b>View-only mode</b></i>
                    <input
                        type="checkbox"
                        checked={this.state.isViewMode}
                        onChange={this.toggleViewModeHandler}/>
                </label>
                <main>
                    {listCards}
                </main>
            </div>
        );
    }

}

export default App;