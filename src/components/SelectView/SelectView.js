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
      console.log(response.data);
      
    }).catch(error => {
      console.log('/api/pizza GET error:', error);
    });
  }

  render() {
    return (
      <div>
        <h1>Step 1: Select Your Pizza</h1>
        <ul>

        </ul>
      </div>
    );
  }
}

export default connect()(SelectView);