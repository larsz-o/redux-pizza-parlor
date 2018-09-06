import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminView extends Component {
  render() {
    return('Hello from AdminView');
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(AdminView);