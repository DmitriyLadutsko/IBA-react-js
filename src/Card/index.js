import React, {useState} from "react";
import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = (props) => {

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
        setChecked(false);
        setEdit(!isEdit);
    };

    let changedCaption;
    let changedText;

    const saveChanges = () => {
        setCaption({captionValue: changedCaption});
        setText({textValue: changedText})
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
                <h4 onClick={() => setChecked(!isChecked)}>{caption.captionValue}</h4> :
                <input
                    type="text"
                    defaultValue={caption.captionValue}
                    onChange={event => {
                        changedCaption = event.target.value
                    }}
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
                <p>{text.textValue}</p> :
                <textarea
                    defaultValue={text.textValue}
                    onChange={event => {
                        changedText = event.target.value
                    }}
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