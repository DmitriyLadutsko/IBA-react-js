import * as actionTypes from "./types";
import axios from "axios";

export const initCards = () => {
    return dispatch => {
        const viewMode = localStorage.getItem('viewMode');
        if (viewMode) {
            dispatch(setCheckBox(true));
        }
        axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
            .then(response => {
                const pokemons = response.data.slice(0, 15);
                const cards = pokemons.map(pokemon => {
                    return {
                        id: +pokemon.Number,
                        caption: pokemon.Name,
                        text: pokemon.About
                    };
                });
                dispatch(setCardsFromServer(cards));
            })
            .catch(error => {
                dispatch(fetchCardsFailed());
            });
    };
};

export const setCheckBox = (viewMode) => ({
    type: actionTypes.SET_CHECKBOX,
    viewMode: viewMode
});

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

export const setCardsFromServer = (cards) => ({
    type: actionTypes.SET_CARDS_FROM_SERVER, payload: cards
});

export const fetchCardsFailed = () => ({
    type: actionTypes.FETCH_CARDS_FAILED
});

