import React, {useState} from "react";
import './Card.css'
import { FaPencilAlt } from 'react-icons/fa';

const Card = () => {

    const [isChecked, setChecked] = useState(false);

    const write = () => {
        console.log("hi")
    }

    const styleCaption = {
        paddingLeft: '25px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <div className="Card" style={{backgroundColor: isChecked ? '#ebc2f5' : '#c2f5f5'}}>
            <div style={styleCaption}>
                <h4>The CNS</h4>
                <div>
                    <button onClick={() => write()}>
                        <FaPencilAlt />
                    </button>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    />
                </div>
            </div>
            <hr/>
            <p>The brain and spinal cord are the organs of the central nervous system.</p>
        </div>
    );
};

export default Card;