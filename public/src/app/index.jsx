import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import Header from '../components/header/header.component';
import SignUpAndSignIn from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './app.css';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignUpAndSignIn} />
    </Switch>
  </div>
);
export default App;
