import React from 'react';
import NavigationItem from "./NavigationItem";
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/sign-in">Sign in</NavigationItem>
    </ul>
);

export default NavigationItems;