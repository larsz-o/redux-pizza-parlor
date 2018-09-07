import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="site-title">
                        Pizza Goat
                    </span>
                </h1>
                <h2>
                    <span id="total-container">
                        Total: $ {this.props.reduxState.currentOrder.order_total.toFixed(2)}
                    </span>
                </h2>

                <img src="images/goat_small.jpg" alt="pizza" width="200px" height="150px"/>
            </header>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Header); 