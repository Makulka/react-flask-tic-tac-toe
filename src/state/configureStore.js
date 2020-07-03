import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRoutes } from 'redux-first-router'

import page from './reducers/pageReducer';

const routesMap = {
  HOME: '/',
  USER: '/user/:id'
}

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap)
    
  const rootReducer = combineReducers({ page, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const enhancers = compose(enhancer, middlewares)  

  const store = createStore(rootReducer, preloadedState, enhancers)

  return  store 
}

/**
 * connectRoutes(routesMap) returns an object
 *  with {reducer: f, middleware: f, enhancer: f, initialDispatch: f, thunk: f, history: }
 *  history: e.g. {go: f, goBack: f, goForward: f, length: 1, listen: f, location: {pathname: "/", search: "", hash: "", state: undefined}, push: f, replace: f}
*/