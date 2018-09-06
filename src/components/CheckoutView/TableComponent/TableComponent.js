import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableItem from './TableItem/TableItem'
class TableComponent extends Component {
    render() {
        return (
            // {this.props.reduxState.currentOrder.pizzas}
            <table>
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.reduxState.currentOrder.pizzas.map((pizzas, i) => {
                        console.log(pizzas);

                        return (
                            <TableItem key={i} pizzas={pizzas} />
                        )
                    })}

                </tbody>
            </table>
        )
    }

}//end class


const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(TableComponent);
