import React, { Component } from "react";
import axios from 'axios';


export default class Beers extends Component {
//props - what we received
constructor(props) {
    super(props);

    this.state = {
        beers: []
    };
}

componentDidMount() {
    // call axios to received beers
    axios.get('https://api.punkapi.com/v2/beers')
    .then(reponse => reponse.data)
    .then(data => this.setState({ beers: data }));
}


render(){

    const { beers } = this.state;
    
   return (
   <div> {beers.map(beer => {
       return (
           <ul>
               <li>{beer.name}</li>
               <li>{beer.description}</li>
               <li>{beer.ibu}</li>
               <li>{beer.food_pairing}</li>
           </ul>
       )
   })} 
   </div>
   );
}

}
