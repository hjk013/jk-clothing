/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import HomePage from '../pages/homepage/homepage.component';
// import ShopPage from '../pages/shop/shop.component';
// import CheckoutPage from '../pages/checkout/checkout.component';
// import ContactPage from '../pages/contact/contact.component';
// import SignUpAndSignIn from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from '../components/header/header.component';

import { selectCurrentUser } from '../redux/user/user.selectors';

import { checkUserSession } from '../redux/user/user.action';
import Footer from '../components/footer/footer.component';
import GlobalStyle from '../global.styles';

// dynamic import
const HomePage = lazy(() => import('../pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('../pages/shop/shop.component'));
const ContactPage = lazy(() => import('../pages/contact/contact.component'));
const CheckoutPage = lazy(() => import('../pages/checkout/checkout.component'));
const SignUpAndSignIn = lazy(() =>
  import('../pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // eslint-disable-next-line no-shadow
  // This is our Open Subscription
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     // we need to check if our databqse has updated at that reference
  //     // .onsnapShot() gets us back the snapShot object, but remember we need to call .data() method to get the actual properties
  //     // subscriber is always listening.. onSnapShot lisetner
  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  // });

  return (
    <div>
      <Header />
      <GlobalStyle />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            path="/signin"
            render={() =>
              // eslint-disable-next-line react/destructuring-assignment
              currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
