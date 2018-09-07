import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 
import moment from 'moment'; 
import CheckoutHeader from '../Header/CheckoutHeader';

class AdminView extends Component {

  // Initial function to load history into DOM
  componentDidMount(){
    this.getOrderHistory();
  }

  // GET
  getOrderHistory = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then((response) => {
      const orderHistory = response.data;
      // Sends history to reducer
      const action = {type: 'GET_HISTORY', payload: orderHistory};
      this.props.dispatch(action);
    }).catch((error)=>{
      console.log('Error getting order history', error);
    })
  } // End GET request

  render() {
    return(
      <div>
        <CheckoutHeader />
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Pizzas Ordered</th>
          <th>Cost</th>
          </tr>
          </thead>
          <tbody>

            {/* For each object in the history, create a line for the order */}
            {this.props.reduxState.history.map((order, i)=>{
              return (
                <tr key={i}>
                  <td>
                  {order.customer.name}
                  </td>
                  <td>
                    {/* Formatting time using moment.js */}
                  {moment(order.time).format('MM/DD/YYYY')} at {moment(order.time).format('h:mm a')}
                  </td>
                  <td>
                  {order.type}
                  </td>
                  <td>
                    {order.pizzas.map((pizza, i)=>{
                      return(
                      <span>{pizza.name}<br/> </span>
                      ); 
                    })}
                  </td>
                  <td>
                  {order.order_total}
                  </td>
                </tr>
              );
            })}
            
          </tbody>

      </table> 
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(AdminView);