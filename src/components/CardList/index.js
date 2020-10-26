import React, {useContext} from "react";
import Card from "./Card";
import CounterContext from '../../context/cardsContext';

const CardList = (props) => {
    const cardsContext = useContext(CounterContext);

    return cardsContext.cards.map((card, index) => {
            return (
                <Card
                    cardIndex={index}
                    key={card.id}
                    cardInfo={card}
                    viewMode={props.viewMode}
                    cardChanged={cardsContext.changeCard(card.id)}
                />
            );
    });
}

export default CardList;