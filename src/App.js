import React, {Component} from "react";
import './App.css';
import Header from './Header';
import Card from './Card'

class App extends Component {
    state = {
        cards: [
            {
                caption: 'Nervous System',
                text: 'The nervous system is the major controlling, regulatory, and communicating system in the body. '
            },
            {
                caption: 'Muscular System',
                text: 'The muscular system is composed of specialized cells called muscle fibers.'
            },
            {
                caption: 'Endocrine System',
                text: 'The endocrine system, along with the nervous system, functions in the regulation of body activities.'
            },
            {
                caption: 'Cardiovascular System',
                text: 'The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system.'
            },
            {
                caption: 'Respiratory System',
                text: 'When the respiratory system is mentioned, people generally think of breathing, but breathing is only one of the activities of the respiratory system.'
            },
            {
                caption: 'Digestive System',
                text: 'The digestive system includes the digestive tract and its accessory organs, which process food into molecules that can be absorbed and utilized by the cells of the body. '
            },
            {
                caption: 'Skeletal System',
                text: 'Humans are vertebrates, animals having a vertabral column or backbone.'
            },
            {
                caption: 'Reproductive System',
                text: 'The major function of the reproductive system is to ensure survival of the species.'
            },
            {
                caption: 'Urinary System',
                text: 'The principal function of the urinary system is to maintain the volume and composition of body fluids within normal limits.'
            },
        ],
        isViewMode: true,
    }

    toggleViewModeHandler = () => {
        const doesShow = this.state.isViewMode;
        this.setState({isViewMode: !doesShow});
    }

    render() {
        const listCards = this.state.cards.slice().map((card, index) =>
            <Card
                key={index.toString()}
                cardInfo={card}
                viewMode={this.state.isViewMode}
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