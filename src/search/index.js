import React, { Component } from 'react';

import './style.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="searchEnter">
          <input className="searchInput" placeholder="Марка" pattern="Марка" />
          <input className="searchInput" placeholder="Модель" pattern="Модель" />
          <input className="searchInput" placeholder="Год" pattern="Год" />
          <input className="searchInput" placeholder="Цена" pattern="Цена"/>
        </div>
        <button className="searchBtn">Найти</button>
      </div>
    )
  }
}

export default Search;
