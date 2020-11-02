import React from 'react';
import CardList from "../../components/CardList";
import {CardContextConsumer} from "../../context/Context";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const CardBuilder = () => {

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

    return (
        <CardContextConsumer>
            {({cards, onlyView, onCheckBoxApp, onRemove, onAdd, error}) => (
                <>
                    <StyledCheckbox
                        checked={onlyView}
                        onChange={onCheckBoxApp}
                    />
                    <StyledLabel>
                        <i><b>View-only mode</b></i>
                    </StyledLabel>
                    <Button
                        clicked={onRemove}
                        btnStyle="Brawn">Remove Checked Cards</Button>
                    <Button
                        clicked={onAdd}
                        btnStyle="Orange">Add Card</Button>
                    <main>
                        <CardList error={error} cards={cards}/>
                    </main>
                </>
            )}
        </CardContextConsumer>
    );

};

export default CardBuilder;