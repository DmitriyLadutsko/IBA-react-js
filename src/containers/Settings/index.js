import React from 'react';
import {connect} from 'react-redux';

import styled from "styled-components";
import {onCheckBoxView} from '../../store/actions'

const Settings = (props) => {

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
        <>
            <StyledCheckbox
                checked={props.isOnlyView}
                onChange={props.onCheckBoxView}
            />
            <StyledLabel>
                <i><b>View-only mode</b></i>
            </StyledLabel>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isOnlyView: state.cards.onlyView
    };
};

const mapDispatchToProps = {
    onCheckBoxView
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);