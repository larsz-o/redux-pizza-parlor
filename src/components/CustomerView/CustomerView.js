import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerView extends Component {
    constructor() {
        super();
        this.state = {
            customer: {
                name: '',
                street: '',
                city: '', 
                zip: '',
            },
            type: '',
        }
    }

    handleCustomerChange = (event) => {
        this.setState({
            ...this.state,
          customer: {
              ...this.state.customer,
              [event.target.name]: event.target.value,
          }
        });
      }

      handleTypeChange = (event) => {
          this.setState({
              ...this.state,
              type: event.target.value
          });
      }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_INFO', payload: this.state};
        this.props.dispatch(action);
        this.setState({
            customer: {
                name: '',
                street: '',
                city: '', 
                zip: '',
            },
            type: '',
        });
        this.props.history.push('/checkout');
    }
    render() {
        return (
            <div>
                <h2>Customer Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" onChange={this.handleCustomerChange} name="name"/>
                    <br />
                    <input placeholder="Street Address" onChange={this.handleCustomerChange} name="street"/>
                    <br />
                    <input placeholder="City" onChange={this.handleCustomerChange} name="city"/>
                    <br />
                    <input placeholder="Zip" onChange={this.handleCustomerChange} name="zip"/>
                    <br />
                    <div>
                        <input onChange={this.handleTypeChange} type="radio" id="pickup" value="Pickup" name="type" />
                        <label htmlFor="pickup">Pickup</label>
                        <br />
                        <input onChange={this.handleTypeChange} type="radio" id="delivery" value="Delivery" name="type" />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                    <input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}

export default connect()(CustomerView);