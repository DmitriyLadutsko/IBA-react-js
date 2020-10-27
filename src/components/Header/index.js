import React, {useContext} from "react";
import './Header.css';
import CardsContext from '../../context/cardsContext';

const Header = () => {
    const cardsContext = useContext(CardsContext);

    return (
        <div className="Header">
            <h1 style={{fontWeight: '400'}}>human body systems</h1>
            <span className="counter">
                {cardsContext.cards.length}
            </span>
        </div>
    );
};

export default Header;