import React from 'react';
import classes from './Navigation.module.scss';
import NavigationItem from './NavigationItem';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <div>Tic tac toe game</div>
            <ul>
                <NavigationItem>Home</NavigationItem>                                 
            </ul>
        </nav>
    )
}

export default Navigation;