import React, { Component } from 'react';

const URL = 'http://rest-app.net/api/ads?login=nvv1997@ya.ru&token=7acee50ebb42a1c426edbe41bfa9ef04&category_id=9'

class Cards extends Component {

  componentDidMount() {
    fetch( URL, { mode: 'no-cors' })
      .then((data) => console.log(data, 'data'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="cards">
        <div className="card">
          {
            props.data.map(item =>
              (<Card key={data.id}  title={data.title} images={data.images} price={data.price} time={data.time} /> )
            )
          }
        </div>
      </div>
    )
  }
}

export default Cards;
