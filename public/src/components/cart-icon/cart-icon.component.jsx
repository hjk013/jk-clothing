import React from 'react';
import { connect } from 'react-redux';
import ShoppingIcon from '../../../dist/assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon">
    <div className="shopping-icon" onClick={toggleCartHidden}>
      <img className="logo" src={ShoppingIcon} alt="Logo" />
    </div>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
