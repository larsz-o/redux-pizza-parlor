import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="site-title">
                        Pizza Butt
                    </span>
                    </h1>
                    <h2>
                        <span id="total-container">
                            Total: $ {this.props.reduxState.currentOrder.order_total}
                        </span>
                    </h2>
            </header>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(Header); 