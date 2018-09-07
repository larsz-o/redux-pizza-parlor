import React, { Component } from 'react';
import axios from 'axios';
import TopComponent from './TopComponent/TopComponent.js';
import TableComponent from './TableComponent/TableComponent.js';
import {connect} from 'react-redux';
import '../CheckoutView/CheckoutView.css';
import CheckoutHeader from '../Header/CheckoutHeader.js';


class CheckoutView extends Component {
    //sends user to previous page
    goBackBtn = () => {
        this.props.history.push("customer")
    }
    postOrder = () => {
        const currentOrder = this.props.reduxState.currentOrder;
        axios({
            method: 'POST',
            url: '/api/order',
            data: currentOrder
        }).then((response) => {
            const action = { type: 'CLEAR_ORDER' };
            this.props.dispatch(action);
            //takes user back to the first page of ordering pizza
            this.props.history.push('/');
        }).catch((error) => {
            alert('Unable to send order!');
            console.log('error in POST', error);
        });
        //confirmation of order
        alert('Order confirmed!');
    } //end of postOrder

    render() {
        return (
            <div>
                <CheckoutHeader />
                <TopComponent />
                <TableComponent />
                <div>
                    <button class="prev-page" onClick={this.goBackBtn}>Back</button>
                    <button id="checkout-button" onClick={this.postOrder}>Checkout</button>
                </div>
            </div>
        ) //end of return
    }//end render
}//end class
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CheckoutView);
