import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Cart from './components/Cart';
import Home from './components/Home';
import Shelf from './components/Shelf';
import WishList from './components/WishList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shelf">Shelf</Link></li>
                  <li>
                    <Link to="/cart">Cart</Link>
                    <span> ({Object.keys(this.props.cart).length})</span>
                  </li>
                  <li>
                    <Link to="/wishlist">Wish List</Link>
                    <span> ({Object.keys(this.props.wishes).length})</span>
                  </li>
                </ul>
              </nav>
            </header>

            <div className="content">
              <Switch>
                <Route exact path="/" render={() => {
                  return <Home name="Laura" />
                }} />
                <Route path="/cart" component={Cart} />
                <Route path="/shelf" component={Shelf} />
                <Route path="/wishlist" component={WishList} />
              </Switch>
            </div>

          </div>
        </Router>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    wishes: state.wishes
  }
}

// no second param b/c we dont need any actions - just reading the data
export default connect(mapStateToProps)(App);
