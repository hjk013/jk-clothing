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

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuanity, cartItem) =>
        accumulatedQuanity + cartItem.quantity * cartItem.price,
      0
    )
);
