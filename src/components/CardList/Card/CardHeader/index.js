import React, {Fragment} from "react";

const CardHeader = (props) => {
    return (
        <Fragment>
            {(!props.doesEdit || props.viewMode) ?
                <h4>{props.cardInfo.caption}</h4> :
                <input
                    type="text"
                    value={props.inputCaptionValue}
                    onChange={props.changeCaption}
                />
            }
        </Fragment>
    );
};

export default CardHeader;