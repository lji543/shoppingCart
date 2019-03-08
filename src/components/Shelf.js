import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shelfActions from '../actions/shelfActions';
import * as cartActions from '../actions/cartActions';
import * as wishListActions from '../actions/wishListActions';

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStockItem: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addToShelf(this.state.newStockItem)
    this.setState({ newStockItem: '' })
  }

  render() {

    return (
      <div >
        <h2>Store Inventory:</h2>
        {this.props.shelf.map((item,idx) => {
          return (
            <div key={idx}>
              <button onClick={() => {this.props.addToCart(item)}} >+</button>
              <button onClick={() => {this.props.removeFromCart(item)}} >-</button>

              <span> {item} </span>

              <button onClick={() => {this.props.addToWishes(item)}} >  </button>
            </div>
          )
        })}
        <hr />
        <h3>Add Stock</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newStockItem}
            onChange={e => {this.setState({newStockItem:e.target.value})}}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

// map the state to the props
// taking the state that we get from the store and putting it into our component's props
function mapStateToProps(state, props) {
  return {
    // the shelf (in state.shelf) comes from the reducer
    shelf: state.shelf
  }
}

// map the actions to the props
// define and dispatch any actions we need to have performed
// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: bindActionCreators(shelfActions, dispatch)
//   }
// }

// connect returns a fn and we pass Shelf (our component) as the argument
// export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
export default connect(mapStateToProps,
    {
      addToShelf: shelfActions.addToShelf,
      addToCart: cartActions.addToCart,
      removeFromCart: cartActions.removeFromCart,
      addToWishes: wishListActions.addToWishes
    }
  )(Shelf);
