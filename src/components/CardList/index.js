import React from "react";
import Card from "./Card";

const CardList = (props) => {
    return props.cards.map((card, index) => {
            return (
                <Card
                    cardIndex={index}
                    key={card.id}
                    cardInfo={card}
                    viewMode={props.viewMode}
                    cardChanged={props.cardChanged(card.id)}
                    activeCard={props.activeChanged}
                />
            );
    });
}

export default CardList;