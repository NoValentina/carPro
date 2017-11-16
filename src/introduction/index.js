import React, { Component } from 'react';

import './style.css';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <h1 className="introduction_header">fireCare</h1>
        <button className="introduction_btn">Начать поиск</button>
      </div>
    )
  }
}

export default Introduction;
