import React, {useContext} from "react";
import './Header.css';
import CounterContext from '../../context/cardsContext';

const Header = () => {
    const counterContext = useContext(CounterContext);

    return (
        <div className="Header">
            <h1 style={{fontWeight: '400'}}>human body systems</h1>
            <span className="counter">
                {counterContext.cards.length}
            </span>
        </div>
    );
};

export default Header;