import GameView from '../views/GameView/GameView';
import Home from '../views/Home';
import {
    ROUTE_GAME,
    ROUTE_HOME
} from '../actions/actionTypes';

//passed to routesMap in state.location
export const routeToPath = {
    [ROUTE_HOME]: '/',
    [ROUTE_GAME]: '/game',
    
}

//used in App.js to get a specific view for a given route type
export const routeToView = {
    [ROUTE_HOME]: Home,
    [ROUTE_GAME]: GameView
}
  