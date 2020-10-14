import React, {useState} from "react";
import './Card.css'

const Card = () => {

    const [isChecked, setChecked] = useState(false);

    const changeStyleCard = () => {
        let styleCard = {backgroundColor: '#c2f5f5'};
        if (isChecked) {
            styleCard = {backgroundColor: '#ebc2f5'};
        }
        return styleCard
    }


    const styleCaption = {
        display: 'flex',
        justifyContent: 'space-around'
    };

    return (
        <div className="Card" style={changeStyleCard()}>
            <div style={styleCaption}>
                <h4>The CNS</h4>
                <input type="checkbox" onClick={() => setChecked(!isChecked)}/>
            </div>
            <hr/>
            <p>The brain and spinal cord are the organs of the central nervous system.</p>
        </div>
    );
};

export default Card;