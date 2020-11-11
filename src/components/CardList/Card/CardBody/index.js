import React from "react";

const CardBody = (props) => {
    // const {doesEdit, card, inputTextValue, changeText} = props;

    return (
        <div>
            {!props.doesEdit ?
                <p>{props.card.text}</p> :
                <textarea
                    rows="3"
                    value={props.inputTextValue}
                    onChange={props.changeText}
                />}
        </div>
    )
};

export default CardBody;