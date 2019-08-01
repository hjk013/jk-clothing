// function should take in existing cartItems, and cartItemToAdd
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // iterate through cartItems, and see if there are any matching id's with the cartItemToAdd
  // if there is a match, set it to existingCartItem
  // if there is no match, it'll just be undefined
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  // if there is a value for existingCartItem
  if (existingCartItem) {
    // we want to use map so that we can return a new array
    // (we need to return new versions of state, so that our components know to rerender properly)
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if it does not exist, then we want to return a new array with all the existing items
  // and we want to destructure quantity and add in an object, which is equal to our cartItemToAdd,
  // except we're going to give it a base quanity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
