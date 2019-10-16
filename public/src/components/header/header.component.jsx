import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Logo from '../../../dist/assets/crown.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.action';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img className="logo" src={Logo} alt="Logo" />
    </LogoContainer>
    <OptionsContainer>
      {currentUser ? (
        <OptionLink to="/home">
          WELCOME
          <br />
          {currentUser.displayName}!
        </OptionLink>
      ) : null}
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>

      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// state here is the top-level root reducer
// state gives us the root reducer which is an object, gets us the user, which is the userReducer
const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Header);
