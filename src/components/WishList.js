import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as wishListActions from '../actions/wishListActions';

class WishList extends Component {

  render() {
    const wishListItems = Object.keys(this.props.wishes).map((key,idx) => {
      return (
        <li key={idx}>
          <button
            onClick={() => {this.props.removeFromWishes(key)}} >
            &nbsp;X
          </button>
          {key} ({this.props.wishes[key]})
        </li>
      )
    })

    return (
      <div >
        <h2>◊ My WishList ◊</h2>
        <ul>
          {wishListItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wishes: state.wishes
  }
}

export default connect(mapStateToProps, wishListActions)(WishList);
