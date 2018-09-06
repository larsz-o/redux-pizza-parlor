import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const history = (state = [], action) => {
  if (action.type === 'GET_HISTORY') {
    const orderHistoryFromServer = action.payload;
    return orderHistoryFromServer;
  }
  return state;
};

const blankOrder = {
  customer: { 
      name: "",
      street_address: "",
      city: "",
      zip: null
  },
  pizzas: [], // pizza objects go here
  order_total: 0,
  type: "Pickup" // Pickup and Delivery
};

const currentOrder = (state = blankOrder, action) => {
  // DO NOT MUTATE STATE!!!
  // Changes Pizza only 
  if (action.type === 'ADD_PIZZA') {
    const newPizzas = [...state.pizzas, action.payload];

    // reduce will take the cost of each pizza and add them together into a "total", which is returned from the function
    const newTotal = newPizzas.reduce((total, pizza) => total + Number(pizza.cost), 0);
    const newState = {
      ...state,
      pizzas: newPizzas,
      order_total: newTotal
    };
    return newState; // this becomes our "state" the next time the reducer is run
  } else if (action.type === 'REMOVE_PIZZA') {
    const currentPizzas = [...state.pizzas];
    const idOfPizzaToDelete = action.id;
    const newState = {
      ...state,
      // go through the currentPizzas array and remove the pizza whose id matches the id of the pizza we want to delete
      pizzas: currentPizzas.filter(pizza => pizza._id !== idOfPizzaToDelete)
    };
    return newState;
  } // changes customer info
    else if (action.type === 'ADD_INFO') {
    const newCustomer = action.payload.customer;
    const newState = {
      ...state,
      customer: newCustomer,
      type: action.payload.type
    };
    return newState;
  }
    // Sets state back to blank order
    else if (action.type === 'CLEAR_ORDER') {
      return blankOrder;
    }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    history,
    currentOrder
  }),
  applyMiddleware(logger),
 );
 

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
