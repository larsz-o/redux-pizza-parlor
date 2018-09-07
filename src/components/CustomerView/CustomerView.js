import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import './CustomerView.css' 

class CustomerView extends Component {
    constructor() {
        super();

        // Stores user contact information
        // Includes the type of order (pickup || delivery)
        this.state = {
            customer: {
                name: '',
                street_address: '',
                city: '',
                zip: '',
            },
            type: '',
        }
    }
    // Sends user back to home
    goBackBtn = () => {
        this.props.history.push('/')
    }

    // Takes input text fields 
    // adds the infomration to the customer state
    handleCustomerChange = (event) => {
        this.setState({
            ...this.state,
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            }
        });
    }

    // Takes input from radio buttons
    // Adds to customer state
    handleTypeChange = (event) => {
        this.setState({
            ...this.state,
            type: event.target.value
        });
    }

    // Submits user infomration to redux.
    // Resets
    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_INFO', payload: this.state };
        this.props.dispatch(action);
        // Pushes customer to checkout page
        this.props.history.push('/checkout');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>Customer Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" onChange={this.handleCustomerChange} name="name" />
                    <br />
                    <input placeholder="Street Address" onChange={this.handleCustomerChange} name="street_address" />
                    <br />
                    <input placeholder="City" onChange={this.handleCustomerChange} name="city" />
                    <br />
                    <input placeholder="Zip" onChange={this.handleCustomerChange} name="zip" />
                    <br />
                    <div>
                        <input onChange={this.handleTypeChange} type="radio" id="pickup" value="Pickup" name="type" />
                        <label htmlFor="pickup">Pickup</label>
                        <br />
                        <input onChange={this.handleTypeChange} type="radio" id="delivery" value="Delivery" name="type" />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                    <button class="next-page" type="submit" value="Next" id="next-button">Next</button>
                </form>
                <div>
                    <button class="prev-page" onClick={this.goBackBtn}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(CustomerView);