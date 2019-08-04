import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// create selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// create selector

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuanity, cartItem) => accumulatedQuanity + cartItem.quantity,
      0
    )
);
