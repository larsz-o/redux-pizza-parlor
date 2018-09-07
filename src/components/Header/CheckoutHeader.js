import React, { Component } from 'react';
import './Header.css';

class CheckoutHeader extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="site-title">
                        Pizza Goat
                    </span>
                </h1>
                <img src="images/goat_small.jpg" alt="pizza" width="200px" height="150px" />
            </header>
        );
    }
}
export default(CheckoutHeader); 