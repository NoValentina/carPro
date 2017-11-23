import React, { Component } from 'react';

import './App.css';

import Introduction from './introduction';
import Search from './search';
// import Cards from './cards';

class App extends Component {
  state = {
    isVisible: false,
  }

  find = () => {
    this.setState({isVisible: true });
  }

  render() {
    return (
      <div className="app">
        <Introduction findAuto={this.find}/>
        {this.state.isVisible && <Search />}
        {/* <Cards /> */}
      </div>
    );
  }
}

export default App;
