import React from 'react';
import classes from './Menu.css';

const menu = (props) => (
    props.show ? <div className={classes.Menu} onClick={props.clicked}>Menu</div> : null
);

export default menu;
