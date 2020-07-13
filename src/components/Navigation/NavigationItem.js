import React from 'react';
import {NavLink} from "redux-first-router-link";

const NavigationItem = (props) => (
    <NavLink 
        to = {{type: props.type}}
        exact={true}
        activeStyle={{ color: '#d6b4e7' }}
    >
        {props.title}
    </NavLink>
)

export default NavigationItem;

//https://github.com/faceyspacey/redux-first-router-link