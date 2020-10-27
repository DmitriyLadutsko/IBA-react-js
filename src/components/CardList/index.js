import React, {useContext} from "react";
import Card from "./Card";
import CardsContext from '../../context/cardsContext';

const CardList = (props) => {
    const cardsContext = useContext(CardsContext);

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