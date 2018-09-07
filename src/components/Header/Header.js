import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="site-title">
                        Pizza Goat
                    </span>
                </h1>
                <img src="images/goat_small.jpg" alt="pizza" width="200px" height="150px"/>
            </header>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Header); 