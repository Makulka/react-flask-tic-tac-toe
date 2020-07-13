import React from 'react';
import classes from './Navigation.module.scss';
import NavigationItem from './NavigationItem';
import { routes } from '../../state/routes';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <div>My React playground</div>
            <ul>
                {
                    routes.map(route => 
                        <NavigationItem 
                            key={route.type} 
                            type={route.type} 
                            title={route.title}                            
                        />)
                }                                               
            </ul>
        </nav>
    )
}

export default Navigation;