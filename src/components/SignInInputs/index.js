import React from "react";
import { withRouter } from 'react-router-dom';

import Button from "../UI/Button";
import classes from './SignInInputs.module.css';

const SignInInputs = (props) => {

    const checkAndLogin = () => {
        props.history.replace('/');
    }

    return (
        <div className={classes.SignInInputs}>
            <input type="text" placeholder="username "/>
            <input type="text" placeholder="password"/>
            <Button
                clicked={checkAndLogin}
                btnStyle="Orange">Login</Button>
        </div>
    );
}

export default withRouter(SignInInputs);