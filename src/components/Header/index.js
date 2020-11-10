import React from "react";
import './Header.css';
import NavigationItems from "../Navigation/NavigationItems";
import {connect} from 'react-redux';

const Header = (props) => {
    return (
        <header className="Header">
            <h1>purple cards</h1>
            {props.user && <h3>welcome, {props.user.username}</h3>}
            <span className="counter">{props.cardsCount}</span>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        cardsCount: state.cards.cards.length,
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(Header);