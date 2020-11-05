import * as actionTypes from "./types";

export const onCheckBoxView = () => ({
    type: actionTypes.CHANGE_VIEW_CHECKBOX
});
export const onRemoveCards = () => ({
    type: actionTypes.REMOVE_CARDS
});
export const onAddCard = () => ({
    type: actionTypes.ADD_CARD
});
export const onRemoveCard = (id, checkBoxState) => ({
    type: actionTypes.CARD_TO_REMOVE, cardId: id, state: checkBoxState
});
export const onChangeCard = (id, card) => ({
    type: actionTypes.CHANGE_CARD, cardId: id, changedData: card
});
export const onAddCardsFromServer = (cards) => ({
        type: actionTypes.ADD_CARDS_FROM_SERVER, payload: cards
});
export const onHaveError = () => ({
    type: actionTypes.HAVE_ERROR
});
