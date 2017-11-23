import React, { Component } from 'react';

import './style.css';

class Introduction extends Component {
render() {
    return (
      <div className="introduction">
        <div className="layer">
          <h1 className="introduction_header">fireCar</h1>
          <button className="introduction_btn" onClick={this.props.findAuto}>Начать поиск</button>
        </div>
      </div>
    )
  }
}

export default Introduction;
