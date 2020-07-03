import React, { useState, useEffect } from 'react';
import './App.css';
import GameView from './views/GameView/GameView';
import Navigation from './components/Navigation/Navigation';

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <div className="App">
      <Navigation />
      <GameView />
    </div>
  );
}

export default App;