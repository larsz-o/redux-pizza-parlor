import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../TopComponent/TopComponent.css';

class TopComponent extends Component {
    //variables
    customer = this.props.reduxState.currentOrder.customer;
    type = this.props.reduxState.currentOrder.type;

    render(){
        return (
            <div className="container">
                <div className="address">
                    <p>{this.customer.name}</p>
                    <p>{this.customer.street_address}</p>
                    <p>{this.customer.city}</p>
                    <p>{this.customer.zip}</p>
                </div>
                <div className="type">
                    <span>{this.type}</span>
                    <br />
                    <span>Total: $ {this.props.reduxState.currentOrder.order_total.toFixed(2)}</span>
                </div>   
            </div>
        ) //end of return
    } //end of render
} //end of TopComponent class
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(TopComponent);