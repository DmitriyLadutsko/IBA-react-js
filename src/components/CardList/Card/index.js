import React, {useState, useContext} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc/withLoadingDelay";
import PropTypes from 'prop-types';
import CounterContext from '../../../context/cardsContext';

import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = (props) => {
    const cardsContext = useContext(CounterContext);

    const [isChecked, setChecked] = useState(false);

    const [isEdit, setEdit] = useState(false);

    const [caption, setCaption] = useState({
        captionValue: props.cardInfo.caption
    });

    const [text, setText] = useState({
        textValue: props.cardInfo.text
    });

    if (props.viewMode && isEdit) {
        setEdit(!isEdit)
    }

    const editMode = () => {
        setCaption({captionValue: props.cardInfo.caption});
        setText({textValue: props.cardInfo.text})
        setChecked(false);
        setEdit(!isEdit);
    };

    const saveChanges = () => {
        props.cardChanged(caption.captionValue, text.textValue);
        setEdit(!isEdit);
    };

    const activatedCard = () => {
        setChecked(!isChecked);
        cardsContext.toggleCardActive(props.cardIndex);
    };

    let buttons = (
        <>
            {!isEdit ?
                <div>
                    {!props.viewMode &&
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
                    {props.viewMode &&
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={activatedCard}
                    />
                    }

                    {!props.viewMode &&
                    <button
                        onClick={saveChanges}>
                        <FaSave/>
                    </button>
                    }
                    {!props.viewMode &&
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
    activeCard: PropTypes.func.isRequired,
    cardChanged: PropTypes.func.isRequired,
    viewMode: PropTypes.bool.isRequired,
    cardIndex: PropTypes.number,
    cardInfo: PropTypes.shape({
        caption: PropTypes.string,
        text: PropTypes.string
    }),
}

export default withLoadingDelay(Card);