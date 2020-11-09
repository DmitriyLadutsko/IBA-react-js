import React from "react";
import {connect} from 'react-redux';

import Card from "./Card";
import Spinner from "../UI/Spinner";

const CardList = (props) => {
    let cardsView =
        <p style={{textAlign: 'center', color: 'red', fontSize: '1.7rem'}}>
            failed to get pokemon
        </p>;

    if (!props.error) {
        cardsView = props.cards.map((card) => {
            return (
                <Card
                    key={card.id}
                    card={card}
                    onlyView={props.onlyView}
                    dblClick={() => props.onDblClick(card.id)}
                />
            );
        })
    }

    return (props.cards.length !== 0) ? cardsView : <Spinner/>;
}

const mapStateToProps = state => {
    return {
      cards: state.cards.cards,
      onlyView: state.cards.onlyView,
      err: state.cards.error
    };
}

export default connect(mapStateToProps)(CardList);