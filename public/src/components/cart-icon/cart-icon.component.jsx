import React from 'react';
import { connect } from 'react-redux';
import ShoppingIcon from '../../../dist/assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <div className="shopping-icon" onClick={toggleCartHidden}>
      <img className="logo" src={ShoppingIcon} alt="Logo" />
    </div>
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
