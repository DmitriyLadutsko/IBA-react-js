import React from "react";
import {connect} from 'react-redux';

import classes from './FullCard.module.css';
import Card from "../../components/CardList/Card";

const FullCard = (props) => {

    if (props.cards.length === 0) {
        props.history.push('/');
    }

    const cardIndex = props.cards.findIndex(card => card.id === (+props.match.params.id));
    const card = props.cards[cardIndex];


    return (
        <div className={classes.FullCard}>
            <h2>Edit Card</h2>
            <Card card={card}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(FullCard);