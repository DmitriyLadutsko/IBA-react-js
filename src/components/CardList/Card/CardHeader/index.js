import React from "react";

const CardHeader = (props) => {
    return !props.doesEdit || props.viewMode ?
        <h4>{props.cardInfo.caption}</h4> :
        <input
            type="text"
            value={props.inputCaptionValue}
            onChange={props.changeCaption}
        />;
};

export default CardHeader;