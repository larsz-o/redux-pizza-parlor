import React, {Component} from 'react';
import axios from 'axios';
import TopComponent from './TopComponent/TopComponent.js';
import TableComponent from './TableComponent/TableComponent.js';
import {connect} from 'react-redux';

class CheckoutView extends Component{

    //postOrder () will run to post the pizza orders in a table where the admin could see
    postOrder = () => {
        const currentOrder = this.props.reduxState.currentOrder;
        axios({
            method: 'POST',
            url:'/api/order',
            data: currentOrder
        }).then((response) => {
            const action = {type: 'CLEAR_ORDER'};
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

    render(){
        return(
            <div>
            <TopComponent />
            <TableComponent /> 
            <button onClick={this.postOrder}>Checkout</button>
            </div>
        ) //end of return
    }//end render
}//end class
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CheckoutView);
