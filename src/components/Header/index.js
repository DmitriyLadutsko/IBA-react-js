import React from "react";
import './Header.css';
import {CardContextConsumer} from '../../context/Context';

const Header = () => {
    return (
        <div className="Header">
            <h1 style={{fontWeight: '400'}}>human body systems</h1>
            <CardContextConsumer>
                {({cardsCount}) => <span className="counter">{cardsCount}</span>}
            </CardContextConsumer>
        </div>
    );
};

export default Header;