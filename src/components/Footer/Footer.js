import React, {Component} from 'react';
import './Footer.css'; 
import {connect} from 'react-redux'; 

class Footer extends Component {
    render() {
        return ( 
        <footer>
            <h2>
                <span id = "total-container" >
                Total: $ {this.props.reduxState.currentOrder.order_total.toFixed(2)} 
                </span> 
            </h2>
        </footer>
        
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Footer); 