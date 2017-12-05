import React, { Component } from 'react';

import Introduction from './introduction';
import Search from './search';
import Cards from './cards';

import './App.css';

const image = require('./images/photo5.png');

class App extends Component {
  state = {
    isVisible: false,
  }

  find = () => {
    this.setState({isVisible: true });
  }

  render() {
    return (
      <div className="section_intro">
        <div className="layer">
        <Introduction isSearchVisible={this.state.isVisible} findAuto={this.find}/>
        {this.state.isVisible && <Search />}
        {this.state.isVisible && <Cards />}
        </div>
      </div>
    );
  }
}

export default App;
