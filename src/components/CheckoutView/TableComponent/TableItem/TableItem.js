import React, { Component } from 'react';
class TableItem extends Component {
    
    render() {
        
        
        return (
            <tr>
                <td>{this.props.pizzas.name}</td>
                <td>{this.props.pizzas.cost}</td>
            </tr>
        )
    }
}//end class

export default TableItem;