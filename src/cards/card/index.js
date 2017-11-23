import React from 'react';

const Card = props =>
  (<div className="card">
    <img images={props.images} />
    <a className="card_title" title={props.title}>{props.title}</a>
    <div className="card_properties">
      <p className="card_price" price={props.price}>{props.price}</p>
      <p className="card_time" time={props.time}>{props.time}</p>
    </div>
  </div>
);

export default Card;
