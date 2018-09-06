import React, {Component} from 'react';
import {connect} from 'react-redux';
class TableComponent extends Component{
render(){
    return(
        // {this.props.reduxState.currentOrder.pizzas}
<table>
    <thead>
        <tr>
            <th>Food</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>

        </tr>
    </tbody>
</table>
    )
}

}//end class


export default TableComponent