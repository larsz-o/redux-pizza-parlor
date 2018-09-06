import React, {Component} from 'react';
import axios from 'axios';
import TopComponent from './TopComponent/TopComponent.js';
import TableComponent from './TableComponent/TableComponent.js';
import {connect} from 'react-redux';

class CheckoutView extends Component{

    postOrder = () => {
        const currentOrder = this.props.reduxState.currentOrder;
        console.log(currentOrder);
        
        axios({
            method: 'POST',
            url:'/api/order',
            data: currentOrder
        }).then((response) => {
            const action = {type: 'CLEAR_ORDER'};
            this.props.dispatch(action);
            this.props.history.push('/');
        }).catch((error) => {
            alert('Unable to send order!');
            console.log('error in POST', error);
        });
    } //end of postOrder

    render(){
        return(
            <div>
            <TopComponent />
            {/* <TableComponent /> */}
            <button onClick={this.postOrder}>Checkout</button>
            </div>
        )
    }//end render

}//end class
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CheckoutView);
