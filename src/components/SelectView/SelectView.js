import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectView extends Component {
  render() {
    return (
      'Hello from SelectView'
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(SelectView);