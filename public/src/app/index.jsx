/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import Header from '../components/header/header.component';
import SignUpAndSignIn from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.util';
import { setCurrentUser } from '../redux/user/user.action';
import './app.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser } = this.props;
    // This is our Open Subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // we need to check if our databqse has updated at that reference
        // .onsnapShot() gets us back the snapShot object, but remember we need to call .data() method to get the actual properties
        // subscriber is always listening.. onSnapShot
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              // eslint-disable-next-line react/destructuring-assignment
              this.props.currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
