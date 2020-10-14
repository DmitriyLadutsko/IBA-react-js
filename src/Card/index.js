import React, {useState} from "react";
import './Card.css'

const Card = () => {

    const [isChecked, setChecked] = useState(false);

    const styleCaption = {
        display: 'flex',
        justifyContent: 'space-around'
    };

    return (
        <div className="Card" style={{ backgroundColor: isChecked ? '#ebc2f5' : '#c2f5f5' }}>
            <div style={styleCaption}>
                <h4>The CNS</h4>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setChecked(!isChecked)}/>
            </div>
            <hr/>
            <p>The brain and spinal cord are the organs of the central nervous system.</p>
        </div>
    );
};

export default Card;