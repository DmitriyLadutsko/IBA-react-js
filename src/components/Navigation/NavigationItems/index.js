import React from 'react';
import {connect} from 'react-redux';

import NavigationItem from "./NavigationItem";
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        {props.isAuth
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/sign-in">Sign in</NavigationItem>}
        {props.isAdmin && <NavigationItem link="/settings">Settings</NavigationItem>}
    </ul>
);

const mapStateToMap = state => {
    return {
        isAuth: state.auth.user !== null,
        isAdmin: state.auth.isAdmin
    }
};

export default connect(mapStateToMap)(NavigationItems);