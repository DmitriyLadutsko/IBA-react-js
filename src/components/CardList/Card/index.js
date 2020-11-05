import React, {useState} from "react";
import {connect} from 'react-redux';
import {onChangeCard, onRemoveCard} from '../../../store/actions';

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc/withLoadingDelay";
import PropTypes from 'prop-types';

import './Card.css';

import {FaPencilAlt} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import {MdClear} from 'react-icons/md';

const Card = (props) => {
    const [isChecked, setChecked] = useState(false);

    const [isEdit, setEdit] = useState(false);

    const [caption, setCaption] = useState({
        captionValue: props.card.caption
    });

    const [text, setText] = useState({
        textValue: props.card.text
    });

    if (props.onlyView && isEdit) {
        setEdit(!isEdit)
    }

    const editMode = () => {
        setCaption({captionValue: props.card.caption});
        setText({textValue: props.card.text})
        setChecked(false);
        setEdit(!isEdit);
    };

    const saveChanges = () => {
        props.onChangeCard(props.card.id, {
            caption: caption.captionValue,
            text: text.textValue
        });
        setEdit(!isEdit);
    };

    const activatedCard = () => {
        setChecked(!isChecked);
        props.onRemoveCard(props.card.id, !isChecked);
    };

    let buttons = (
        <>
            {!isEdit ?
                <div>
                    {!props.onlyView &&
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
                    {props.onlyView &&
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={activatedCard}
                    />
                    }

                    {!props.onlyView &&
                    <button
                        onClick={saveChanges}>
                        <FaSave/>
                    </button>
                    }
                    {!props.onlyView &&
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
        <div
            onDoubleClick={!isEdit ? props.dblClick : undefined}
            className="Card"
            style={{backgroundColor: isChecked ? '#c2f5f5' : '#ebc2f5'}}>
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
    onlyView: PropTypes.bool,
    onChangeCard: PropTypes.func.isRequired,
    onRemoveCard: PropTypes.func.isRequired,
    card: PropTypes.shape({
        caption: PropTypes.string,
        text: PropTypes.string,
    }),
};

const mapDispatchToProps = {
        onChangeCard,
        onRemoveCard
}


export default connect(null, mapDispatchToProps)(withLoadingDelay(Card));