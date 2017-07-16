import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game'

window.addEventListener('load', function () {
  ReactDOM.render(
    <Game />,
    document.getElementById('app')
  );
});
