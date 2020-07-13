import GameView from '../views/GameView/GameView';
import Home from '../views/Home';
import GameReduxView from '../views/GameRedux/GameReduxView';
import {
    ROUTE_GAME,
    ROUTE_HOME,
    ROUTE_GAME_REDUX
} from '../actions/actionTypes';

//passed to routesMap in state.location
export const routeToPath = {
    [ROUTE_HOME]: '/',
    [ROUTE_GAME]: '/game',
    [ROUTE_GAME_REDUX]: '/gameredux',    
}

//used in App.js to get a specific view for a given route type
export const routeToView = {
    [ROUTE_HOME]: Home,
    [ROUTE_GAME]: GameView,
    [ROUTE_GAME_REDUX]: GameReduxView,  
}

//used in links
export const routes = [
    {
        title: "Home",
        type: ROUTE_HOME
    },
    {
        title: "Tic Tac Toe",
        type: ROUTE_GAME
    },
    {
        title: "Tic Tac Toe Redux",
        type: ROUTE_GAME_REDUX
    }
]
  