import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import GameView from './views/GameView/GameView';
import Navigation from './components/Navigation/Navigation';

import * as components from './testComponents';

const App = ({page}) => {
  const Component = components[page]
  return (
    // <div className="App">
    //   <Navigation />
    //   <GameView />
    // </div>
    <Component />
  );
}

const mapStateToProps = ({page}) => ({page})
export default connect(mapStateToProps)(App);