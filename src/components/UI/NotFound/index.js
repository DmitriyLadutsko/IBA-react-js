import React from 'react';

import notFound from '../../../assets/images/not-found.png';
import classes from './NotFound.module.css'

const NotFound = () => (
    <div className={classes.NotFound}>
        <img src={notFound} alt="page not found"/>
    </div>
);

export default NotFound;