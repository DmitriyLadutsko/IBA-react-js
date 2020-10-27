import React, {useState} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc/withLoadingDelay";
import PropTypes from 'prop-types';

import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = (props) => {
    const {card, onlyView, changeCard, removeCard} = props;

    const [isChecked, setChecked] = useState(false);

    const [isEdit, setEdit] = useState(false);

    const [caption, setCaption] = useState({
        captionValue: card.caption
    });

    const [text, setText] = useState({
        textValue: card.text
    });

    if (onlyView && isEdit) {
        setEdit(!isEdit)
    }

    const editMode = () => {
        setCaption({captionValue: card.caption});
        setText({textValue: card.text})
        setChecked(false);
        setEdit(!isEdit);
    };

    const saveChanges = () => {
        changeCard(caption.captionValue, text.textValue);
        setEdit(!isEdit);
    };

    const activatedCard = () => {
        setChecked(!isChecked);
        removeCard(card.id, !isChecked);
    };

    let buttons = (
        <>
            {!isEdit ?
                <div>
                    {!onlyView &&
                    <button
                        onClick={editMode}>
                        <FaPencilAlt/>
                    </button>
                    }
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={activatedCard}
                    />
                </div> :

                <div>
                    {onlyView &&
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={activatedCard}
                    />
                    }

                    {!onlyView &&
                    <button
                        onClick={saveChanges}>
                        <FaSave/>
                    </button>
                    }
                    {!onlyView &&
                    <button
                        onClick={() => setEdit(!isEdit)}>
                        <MdClear/>
                    </button>
                    }
                </div>
            }
        </>
    );

    const styleCaption = {
        paddingLeft: '25px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <div className="Card" style={{backgroundColor: isChecked ? '#c2f5f5' : '#ebc2f5'}}>
            <div style={styleCaption}>
                <CardHeader
                    doesEdit={isEdit}
                    inputCaptionValue={caption.captionValue}
                    changeCaption={event => setCaption({captionValue: event.target.value})}
                    {...props}
                />
                {buttons}
            </div>
            <hr/>
            <CardBody
                doesEdit={isEdit}
                inputTextValue={text.textValue}
                changeText={event => setText({textValue: event.target.value})}
                {...props}
            />
        </div>
    );
};

Card.propTypes = {
    onlyView: PropTypes.bool.isRequired,
    changeCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    card: PropTypes.shape({
        caption: PropTypes.string,
        text: PropTypes.string,
    }),
};

export default withLoadingDelay(Card);