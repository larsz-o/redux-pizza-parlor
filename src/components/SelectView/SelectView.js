import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PizzaCard from './PizzaCard';
import Header from '../Header/Header.js';

const containerStyle = {
  width: '900px',
  margin: '20px auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}

class SelectView extends Component {
  constructor(props) {
    super(props);
    // Stores pizzas from componentDidMount
    this.state = {
      pizzas: []
    };
  }

  componentDidMount() {
    axios.get('/api/pizza') // get pizzas from server
    .then(response => {
      const pizzasFromServer = response.data;
      // console.log(pizzasFromServer);
      // Stores pizzas in the state, updates DOM
      this.setState({
        pizzas: pizzasFromServer
      });
    }).catch(error => {
      console.log('/api/pizza GET error:', error);
    });
  }

  nextPage = () => {
    // console.log('nextPage working');
    // Automatically sends the user to the next page
    this.props.history.push("customer")
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Step 1: Select Your Pizza</h1>
        {/* Container for all pizza cards */}
        <div style={containerStyle}>
        {/* Creates a new PizzaCard element for every pizza in state */}
          {this.state.pizzas.map(pizza => <PizzaCard key={pizza._id} pizza={pizza} />)}
        </div>
        
        <div>
          <button className="next-page" onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(SelectView);