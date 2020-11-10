import * as actionTypes from '../actions/types';

const initialState = {
    cards: [],
    cardsToRemove: [],
    error: false,
    onlyView: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CARDS_FROM_SERVER:
            const fromServerCards = action.payload;
            return {
                ...state,
                cards: fromServerCards
            };

        case actionTypes.FETCH_CARDS_FAILED:
            return {
                ...state,
                error: !state.error
            };

        case actionTypes.CHANGE_VIEW_CHECKBOX:
            if (!state.onlyView) {
                localStorage.setItem('viewMode', ' ')
            } else {
                localStorage.removeItem('viewMode')
            }
            return {
                ...state,
                onlyView: !state.onlyView
            };

        case actionTypes.SET_CHECKBOX:
            return  {
                ...state,
                onlyView: action.viewMode
            }

        case actionTypes.CHANGE_CARD:
            const cardIndex = state.cards.findIndex(card => card.id === action.cardId);
            const card = {...state.cards[cardIndex]};
            card.caption = action.changedData.caption;
            card.text = action.changedData.text;
            const newCards = [...state.cards];
            newCards[cardIndex] = card;
            return {
                ...state,
                cards: newCards
            };

        case actionTypes.CARD_TO_REMOVE:
            let updatedCardsToRemove = [ ...state.cardsToRemove ];
            if (action.state) {
                updatedCardsToRemove.push(action.cardId);
            } else {
                updatedCardsToRemove = state.cardsToRemove.filter(value => value !== action.cardId);
            }
            return {
                ...state,
                cardsToRemove: updatedCardsToRemove
            };

        case actionTypes.ADD_CARD:
            const cards = [...state.cards];
            const lastCard = cards[cards.length - 1];
            const newCard = {
                id: (+lastCard.id + 1),
                caption: 'This is a new Card',
                text: 'Card description',
            };
            return {
                ...state,
                cards: state.cards.concat(newCard)
            };

        case actionTypes.REMOVE_CARDS:
            const updatedCards = state.cards.filter(card => !state.cardsToRemove.includes(card.id))
            return {
                ...state,
                cards: updatedCards
            };

        default:
            return state;
    }
}

export default reducer;
