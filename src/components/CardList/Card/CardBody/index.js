import React from "react";

const CardBody = (props) => {
    const {doesEdit, card, inputTextValue, changeText} = props;

    return (
        <div>
            {!doesEdit ?
                <p>{card.text}</p> :
                <textarea
                    rows="3"
                    value={inputTextValue}
                    onChange={changeText}
                />}
        </div>
    )
};

export default CardBody;