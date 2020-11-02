import React from "react";
import Card from "./Card";
import Spinner from "../UI/Spinner";
import {CardContextConsumer} from '../../context/Context';

const CardList = ({cards, error}) => {
    let cardsView =
        <p style={{textAlign: 'center', color: 'red', fontSize: '1.7rem'}}>
            failed to get pokemon
        </p>;

    if (!error) {
        cardsView = <CardContextConsumer>
            {({cards, onlyView, changeCard, removeCard}) => (
                cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                card={card}
                                onlyView={onlyView}
                                changeCard={changeCard(card.id)}
                                removeCard={removeCard}
                            />
                        )
                    }
                )
            )}
        </CardContextConsumer>
    }

    return (cards.length !== 0) ? cardsView : <Spinner/>;
}

export default CardList;