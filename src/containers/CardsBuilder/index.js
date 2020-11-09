import React from 'react';
import {connect} from 'react-redux';

import CardList from "../../components/CardList";
import Button from "../../components/UI/Button";
import {onAddCard, onRemoveCards} from '../../store/actions'

const CardBuilder = (props) => {

    const selectCardHandler = id => {
        props.history.push('/cards/' + id);
    }

    return (
        <>
            <div style={{display: 'flex'}}>
                <Button
                    clicked={props.onRemoveCards}
                    btnStyle="Brawn">Remove Checked Cards</Button>
                <Button
                    clicked={props.onAddCard}
                    btnStyle="Orange">Add Card</Button>
            </div>

            <main>
                <CardList onDblClick={selectCardHandler}/>
            </main>
        </>
    );
};

const mapDispatchToProps = {
    onRemoveCards,
    onAddCard

};

export default connect(null, mapDispatchToProps)(CardBuilder);