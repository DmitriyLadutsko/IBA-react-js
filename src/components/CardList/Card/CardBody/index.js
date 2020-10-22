import React from "react";

const CardBody = (props) => {
    return (
        <div>
            {(!props.doesEdit || props.viewMode) ?
                <p>{props.cardInfo.text}</p> :
                <textarea
                    value={props.inputTextValue}
                    onChange={props.changeText}
                />}
        </div>
    )
};

export default CardBody;