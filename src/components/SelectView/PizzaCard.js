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

  handleClick = () => {
    console.log(this.props.pizza.name);
    
  };

  render() {
    const { pizza } = this.props;
    return(
      <div style={styles.container}>
        <img style={styles.image} src={pizza.image_path} />
        <div>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.cost}</p>
        </div>
        <button onClick={this.handleClick}>Add to Order</button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(PizzaCard);