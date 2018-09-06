import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  container: {
    height: '450px',
    width: '250px',
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    boxShadow: '0 2px 2px rgba(0,0,0,0.25)',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '200px 200px 50px'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'fill'
  }
};

class PizzaCard extends Component {

  addPizzaToOrder = () => {
    console.log('adding to order:', this.props.pizza.name);
    const action = {
      type: 'ADD_PIZZA',
      payload: this.props.pizza
    };
    this.props.dispatch(action);
  };

  removePizzaFromOrder = () => {
    console.log('removing from order:', this.props.pizza.name);
    
  }

  render() {
    const { pizza } = this.props;
    const pizzasInOrder = this.props.reduxState.currentOrder.pizzas;
    console.log(pizzasInOrder);
    return(
      <div style={styles.container}>
        <img style={styles.image} src={pizza.image_path} />
        <div>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.cost}</p>
        </div>
        {/* Check if the pizza in the card is already in the order (compare ids). 
        If not, show the Add to Order button. If so, show the Remove from Order button. */}
        {pizzasInOrder.some(p => p._id === pizza._id) === false
        ? <button onClick={this.addPizzaToOrder}>Add to Order</button>
        : <button onClick={this.removePizzaFromOrder}>Remove from Order</button>}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(PizzaCard);