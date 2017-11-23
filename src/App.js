import React, { Component } from 'react';

import './App.css';

import Introduction from './introduction';
import Search from './search';
// import Cards from './cards';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Introduction />
        <Search />
        {/* <Cards /> */}
      </div>
    );
  }
}

export default App;
