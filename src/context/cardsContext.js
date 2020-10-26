import React from "react";

const cardsContext = React.createContext({
    cards: [],
    changeCard: () => {},
    addCard: () => {},
    deleteCard: () => {},
    toggleCardActive: () => {},
});

export default cardsContext;