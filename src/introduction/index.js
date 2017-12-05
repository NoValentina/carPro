import React, { Component } from 'react';

import './style.css';

class Introduction extends Component {
render() {
    return (
      <div className="introduction">
        <h1 className="introduction_header">fireCar</h1>
        {!this.props.isSearchVisible && <button className="introduction_btn" onClick={this.props.findAuto}>Начать поиск</button>}
      </div>
    )
  }
}

export default Introduction;
