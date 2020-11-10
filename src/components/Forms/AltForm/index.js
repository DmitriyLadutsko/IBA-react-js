import React from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import {onLoginUser} from '../../../store/actions';


const usernameRegExp = /^([A-Za-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const required = value => (value ? undefined : 'Required')
const mustBeEmail = value => (!usernameRegExp.test(value) ? 'Must be email' : undefined)
const passwordValidator = value => (!passwordRegExp.test(value) ? 'At least one letter and one number, min 8 characters' : undefined);

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AltForm = (props) => {

    const onSubmit = (values) => {
        props.onLoginUser(values)
        props.history.replace('/');
    };

    return (
        <Styles>
            <h2>Enter Username and Password</h2>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="username"
                            validate={composeValidators(required, mustBeEmail)}>
                            {({input, meta}) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="username(example: test@test.ru)"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="password"
                            validate={composeValidators(required, passwordValidator)}>
                            {({input, meta}) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </Styles>
    );
};

const mapDispatchToProps = {
    onLoginUser
}

export default connect(null, mapDispatchToProps)(withRouter(AltForm));