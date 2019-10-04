import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

//Layout
import Navbar from './component/layout/Navbar';
// Component
import PurchaseHistory from './component/PurchaseHistory';
import Cart from './component/Cart';
import Receipt from './component/Receipt';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={PurchaseHistory} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/receipt" component={Receipt} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
