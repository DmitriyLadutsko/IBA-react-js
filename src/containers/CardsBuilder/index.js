import React from 'react';
import {connect} from 'react-redux';

import CardList from "../../components/CardList";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import * as actionTypes from '../../store/actions';

const CardBuilder = (props) => {

    const StyledLabel = styled.label.attrs(() => ({
        htmlFor: 'checkbox'
    }))`
        color: darkmagenta;
        border: double darkmagenta;
        border-radius: 8px;
        margin: 20px;
        padding: 5px;
        cursor: pointer;
        &:hover {
            color: white;
            background-color: darkmagenta;
        }
        `;

    const StyledCheckbox = styled.input.attrs(() => ({
        id: 'checkbox',
        type: 'checkbox',
    }))`
        width: 18px;
        height: 18px;
            &:checked + ${StyledLabel} {
              background: darkmagenta;
              color: white;
            }
        `;

    const selectCardHandler = (id) => {
        props.history.push('/cards/' + id);
    }

    return (
        <>
            <StyledCheckbox
                checked={props.isOnlyView}
                onChange={props.onCheckBoxView}
            />
            <StyledLabel>
                <i><b>View-only mode</b></i>
            </StyledLabel>
            <Button
                clicked={props.onRemoveCards}
                btnStyle="Brawn">Remove Checked Cards</Button>
            <Button
                clicked={props.onAddCard}
                btnStyle="Orange">Add Card</Button>
            <main>
                <CardList onDblClick={selectCardHandler}/>
            </main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isOnlyView: state.onlyView
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckBoxView: () => dispatch({type: actionTypes.CHANGE_VIEW_CHECKBOX}),
        onRemoveCards: () => dispatch({type: actionTypes.REMOVE_CARDS}),
        onAddCard: () => dispatch({type: actionTypes.ADD_CARD}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardBuilder);