import React from "react";
import Card from "./Card";
import {CardContextConsumer} from '../../context/Context';

const CardList = () => {
    return (
        <CardContextConsumer>
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
    );
}

export default CardList;