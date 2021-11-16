'use strict';

// use this to define global helpers
const React = window.React;
const e = React.createElement;

const renderIntoContainer = (querySelector, reactClass) => {
  const domContainer = document.querySelector(querySelector);
  ReactDOM.render(e(reactClass), domContainer);    
}

