import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 
import moment from 'moment'; 

class AdminView extends Component {

  componentDidMount(){
    this.getOrderHistory();
  }

  getOrderHistory = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then((response) => {
      const orderHistory = response.data; 
      console.log(orderHistory);
      const action = {type: 'GET_HISTORY', payload: orderHistory};
      this.props.dispatch(action); 
    }).catch((error)=>{
      console.log('Error getting order history', error);
    })
  }

  render() {
    return(
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
          </tr>
          </thead>
          <tbody>
            {this.props.reduxState.history.map((order, i)=>{
              return (
                <tr key={i}>
                  <td>
                  {order.customer.name}
                  </td>
                  <td>
                  {moment(order.time).format('MM/DD/YYYY')} at {moment(order.time).format('h:mm a')}
                  </td>
                  <td>
                  {order.type}
                  </td>
                  <td>
                  {order.order_total}
                  </td>
                </tr>
              );
            })}
            
          </tbody>

      </table> 
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(AdminView);