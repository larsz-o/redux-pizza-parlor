import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerView extends Component {
    constructor() {
        super();
        this.state = {
            cusomer: {
                name: '',
                street: '',
                city: '', 
                zip: '',
            },
            type: '',
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Name" />
                    <br />
                    <input placeholder="Street Address" />
                    <br />
                    <input placeholder="City" />
                    <br />
                    <input placeholder="Zip" />
                    <br />
                    <div>
                        <input type="radio" id="pickup" value="Pickup" name="type" />
                        <label for="pickup">Pickup</label>
                        <br />
                        <input type="radio" id="delivery" value="Delivery" name="type" />
                        <label for="delivery">Delivery</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(CustomerView);