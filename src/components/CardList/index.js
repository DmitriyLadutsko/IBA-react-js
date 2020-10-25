import React from "react";
import Card from "./Card";
import withLoadingDelay from "../../hoc/withLoadingDelay";

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

export default withLoadingDelay(CardList);