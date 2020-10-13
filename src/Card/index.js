import React, {useState} from "react";
import './Card.css'

const Card = () => {

    const [styleState, setStyleState] = useState({
            backgroundColor: '#c2f5f5'
        },
    );

    const switchCardStyle = () => {
        setStyleState({
            backgroundColor: '#ebc2f5'
        });
    };

    const styleCaption = {
        display: 'flex',
        justifyContent: 'space-around'
    };

    return (
        <div className="Card" style={styleState}>
            <div style={styleCaption}>
                <h4>The CNS</h4>
                <input type="checkbox" onChange={switchCardStyle}/>
            </div>
            <hr/>
            <p>The brain and spinal cord are the organs of the central nervous system.</p>
        </div>
    );
};

export default Card;