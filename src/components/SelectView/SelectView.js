import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PizzaCard from './PizzaCard';

class SelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    };
  }

  componentDidMount() {
    axios.get('/api/pizza') // get pizzas from server
    .then(response => {
      const pizzasFromServer = response.data;
      console.log(pizzasFromServer);
      this.setState({
        pizzas: pizzasFromServer
      });
    }).catch(error => {
      console.log('/api/pizza GET error:', error);
    });
  }

  render() {
    return (
      <div>
        <h1>Step 1: Select Your Pizza</h1>
        <ul>
          {this.state.pizzas.map(pizza => <PizzaCard key={pizza._id} pizza={pizza} />)}
        </ul>
      </div>
    );
  }
}

export default connect()(SelectView);