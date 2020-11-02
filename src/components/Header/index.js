import React from "react";
import './Header.css';
import {CardContextConsumer} from '../../context/Context';
import NavigationItems from "../Navigation/NavigationItems";

const Header = () => {
    return (
        <header className="Header">
            <h1>purple cards</h1>
            <CardContextConsumer>
                {({cardsCount}) => <span className="counter">{cardsCount}</span>}
            </CardContextConsumer>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Header;