import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Products from './pages/Products' ;
import Cart from './pages/Cart' ;
import store from './redux';
import './App.css';

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Products/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
