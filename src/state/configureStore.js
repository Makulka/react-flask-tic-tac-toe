import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import {routeToPath} from './routes';


export default function configureStore(preloadedState) {
  const { reducer: location, middleware: routerMiddleware, enhancer: routerEnhancer } = connectRoutes(routeToPath)
    
  const rootReducer = combineReducers({location})
  const middlewares = applyMiddleware(routerMiddleware)
  const enhancers = compose(routerEnhancer, middlewares)  

  const store = createStore(rootReducer, preloadedState, enhancers)

  return  store 
}

/**
 * connectRoutes(routeToPath) returns an object
 *  with {reducer: f, middleware: f, enhancer: f, initialDispatch: f, thunk: f, history: }
 *  history: e.g. {go: f, goBack: f, goForward: f, length: 1, listen: f, location: {pathname: "/", search: "", hash: "", state: undefined}, push: f, replace: f}
*/