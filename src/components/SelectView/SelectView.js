import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectView extends Component {
  render() {
    return (
      <div>
        <h1>Step 1: Select Your Pizza</h1>
      </div>
    );
  }
}

export default connect()(SelectView);