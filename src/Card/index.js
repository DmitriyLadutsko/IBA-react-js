import React, {useState} from "react";
import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = (props) => {

    const [isChecked, setChecked] = useState(false);

    const [isEdit, setEdit] = useState(false);

    const [caption, setCaption] = useState({
        captionValue: 'mike'
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
        props.changedCaption(caption.captionValue, text.textValue);
        setEdit(!isEdit);
    };

    const styleCaption = {
        paddingLeft: '25px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    let captionView = (
        <div style={styleCaption}>
            {(!isEdit || props.viewMode) ?
                <h4 onClick={() => setChecked(!isChecked)}>{props.cardInfo.caption}</h4> :
                <input
                    type="text"
                    value={caption.captionValue}
                    onChange={event => setCaption({captionValue: event.target.value})}
                />
            }
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
                        onChange={() => setChecked(!isChecked)}
                    />
                </div> :

                <div>
                    {props.viewMode &&
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setChecked(!isChecked)}
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
        </div>
    );

    let textView = (
        <div>
            {(!isEdit || props.viewMode) ?
                <p>{props.cardInfo.text}</p> :
                <textarea
                    value={text.textValue}
                    onChange={event => setText({textValue: event.target.value})}
                />}
        </div>
    );

    return (
        <div className="Card" style={{backgroundColor: isChecked ? '#c2f5f5' : '#ebc2f5'}}>
            {captionView}
            <hr/>
            {textView}
        </div>
    );
};

export default Card;