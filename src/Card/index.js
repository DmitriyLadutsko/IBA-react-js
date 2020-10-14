import React, {useState} from "react";
import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = () => {

    const [isChecked, setChecked] = useState(false);

    const [isInput, setInput] = useState(false);

    const [caption, setCaption] = useState({
        captionValue: 'The CNS'
    });

    const [text, setText] = useState({
        textValue: 'The brain and spinal cord are the organs of the central nervous system.'
    });

    const edit = () => {
        setChecked(false);
        setInput(!isInput);
    };

    let changedCaption;
    let changedText;

    const getEdited = () => {
        setCaption({captionValue: changedCaption});
        setText({textValue: changedText})
        setInput(!isInput);
    };

    const styleCaption = {
        paddingLeft: '25px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <div className="Card" style={{backgroundColor: isChecked ? '#c2f5f5' : '#ebc2f5'}}>
            <div style={styleCaption}>
                <h4 style={{display: !isInput ? '' : 'none'}}>{caption.captionValue}</h4>
                <input
                    style={{display: isInput ? '' : 'none'}}
                    type="text"
                    value={changedCaption}
                    onChange={event => {
                        changedCaption = event.target.value
                    }}
                />
                <div>
                    <button
                        style={{display: !isInput ? '' : 'none'}}
                        onClick={edit}>
                        <FaPencilAlt/>
                    </button>
                    <button
                        style={{display: isInput ? '' : 'none'}}
                        onClick={getEdited}>
                        <FaSave/>
                    </button>
                    <button
                        style={{display: isInput ? '' : 'none'}}
                        onClick={() => setInput(!isInput)}>
                        <MdClear/>
                    </button>
                    <input
                        style={{display: !isInput ? '' : 'none'}}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    />
                </div>
            </div>
            <hr/>
            <p style={{display: !isInput ? '' : 'none'}}>{text.textValue}</p>
            <input
                style={{display: isInput ? '' : 'none'}}
                type="text"
                value={changedText}
                onChange={event => {
                    changedText = event.target.value
                }}
            />
        </div>
    );
};

export default Card;