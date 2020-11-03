import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Please enter a valid {props.valueType}!</p>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} htmlFor="">{props.label}</label>
            <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>
            {validationError}
        </div>
    )
}

export default Input;