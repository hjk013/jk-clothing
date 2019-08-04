import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShoppingIcon from '../../../dist/assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <div className="shopping-icon">
      <img className="logo" src={ShoppingIcon} alt="Logo" />
    </div>
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
