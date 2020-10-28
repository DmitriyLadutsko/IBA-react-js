import React from "react";

const CardHeader = (props) => {
    const {doesEdit, card, inputCaptionValue, changeCaption} = props;

    return !doesEdit ?
        <h4>{card.caption}</h4> :
        <input
            type="text"
            value={inputCaptionValue}
            onChange={changeCaption}
        />;
};

export default CardHeader;