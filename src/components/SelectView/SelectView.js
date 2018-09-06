import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class SelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    };
  }

  componentDidMount() {
    axios.get('/api/pizza')
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

  nextPage = () => {
    console.log('nextPage working');
    
    this.props.history.push("customer")
  }

  render() {
    return (
      <div>
        <h1>Step 1: Select Your Pizza</h1>
        <ul>
          {this.state.pizzas.map(pizza => <li>{pizza.name}</li>)}
        </ul>
        <div>
          <button onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(SelectView);