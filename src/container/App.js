import React, {Component} from "react";

import './App.css';
import styled from 'styled-components';

import {CardContextConsumer} from '../context/Context';
import Header from '../components/Header';
import CardList from '../components/CardList';

class App extends Component {

    render() {
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

        const BrownButton = styled.button`
        color: white;
        background-color: brown;
        font-weight: bold;
        font-size: 16px;
        border: double brown;
        border-radius: 8px;
        margin: auto;
        padding: 5px;
        &:hover {
            color: brown;
            background-color: lightgrey;
            
        }
        `;

        const OrangeButton = styled.button`
        color: white;
        background-color: #FF9800;
        font-weight: bold;
        font-size: 16px;
        border: double #FF9800;
        border-radius: 8px;
        margin: auto 10px;
        padding: 5px;
        &:hover {
            color: #FF9800;
            background-color: #f6ddb79c;
        }
        `;

        return (
            <CardContextConsumer>
                {({onlyView, onCheckBoxApp, onRemove, onAdd, error}) => (
                    <div className="App">
                        <Header/>
                        <StyledCheckbox
                            checked={onlyView}
                            onChange={onCheckBoxApp}
                        />
                        <StyledLabel>
                            <i><b>View-only mode</b></i>
                        </StyledLabel>
                        <BrownButton onClick={onRemove}>
                            Remove Checked Cards
                        </BrownButton>
                        <OrangeButton onClick={onAdd}>
                            Add Card
                        </OrangeButton>
                        <main>
                            <CardList error={error} />
                        </main>
                    </div>
                )}
            </CardContextConsumer>
        );
    }
}

export default App;