import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomerView from '../../CustomerView/CustomerView';

class TopComponent extends Component {

    customer = this.props.reduxState.currentOrder.customer;
    type = this.props.reduxState.currentOrder.type;

    render(){
        return (
            <div>
                {this.customer.name}
                <br />
                {this.customer.street_address}
                <br />
                {this.customer.city}
                <br />
                {this.customer.zip}
                <br />
                {this.type}
            </div>
        ) //end of return
    } //end of render
} //end of TopComponent class
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(TopComponent);