import React, { Component } from 'react';
import mockData from './mockData.js'
import Card from './card';
import $ from "jquery";

const URL = 'http://rest-app.net/api/ads?login=nvv1997@ya.ru&token=7acee50ebb42a1c426edbe41bfa9ef04&category_id=9&limit=2'

class Cards extends Component {
  state = {
    data: [],
  }


  componentDidMount() {

    // function setHeader(xhr) {
    //   var token = '';
    //   xhr.setRequestHeader('Authorization', token);
    // }

    // $(function(){
  	// запрос с использованием jQuery
     //
  		// $.ajax({
  		//    url: URL,
     //     type: "GET",
     //     crossDomain: true,
     //     dataType: "json",
  		//    success: function(data){
    	// 		 console.log(data);
    	// 	   },
  		//    error: function(data){
    	// 		 console.log(data);
     //     },
     //      beforeSend: setHeader
		 //   }).done(() => console.log('ebaaaat'))
     // })



    // $.getJSON(URL, function(data) {
    //    this.setState({ data: data })
    //    console.log(data, 'data');
    // })

    fetch( URL)
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="cards">
        <div className="card">
          { this.state.data.length > 0 &&
            this.state.data.map(item =>
              (<Card key={item.Id}  title={item.title} images={item.images} price={item.price} time={item.time} /> )
            )
          }
        </div>
      </div>
    )
  }
}

export default Cards;
