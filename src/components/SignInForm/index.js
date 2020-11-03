import React, {useState} from "react";
import {withRouter} from 'react-router-dom';

import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from './SignInForm.module.css';

const SignInForm = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [signForm, setSignForm] = useState({
        inputs: {
            username: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'username(example: test@test.ru)'
                },
                value: '',
                validation: {
                    required: true,
                    regExp: /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/
                },
                valid: false,
                touched: false
            },
            password: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    regExp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                },
                valid: false,
                touched: false
            }
        }
    });

    const checkAndLogin = () => {
        props.history.replace('/');
    }

    const checkValidation = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.regExp) {
            isValid = rules.regExp.test(value) && isValid
        }
        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignForm = {
            ...signForm.inputs
        };
        const updatedFormElement = {
            ...updatedSignForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidation(
            updatedFormElement.value,
            updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedSignForm) {
            formIsValid = updatedSignForm[inputIdentifier].valid && formIsValid
        }

        setSignForm({inputs: updatedSignForm});
        setFormIsValid(formIsValid)
    }

    const formElementsArray = [];
    for (let key in signForm.inputs) {
        formElementsArray.push({
            id: key,
            config: signForm.inputs[key]
        })
    }

    let form = (
        <form onSubmit={checkAndLogin}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    valueType={formElement.id}
                    changed={(event) => inputChangedHandler(event, formElement.id)}/>
            ))}
            <Button btnStyle="Orange" disabled={!formIsValid}>LOGIN</Button>
        </form>
    );

    return (
        <div className={classes.SignInForm}>
            <h3><strong>Enter Username and Password</strong></h3>
            {form}
        </div>
    );
}

export default withRouter(SignInForm);