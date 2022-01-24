import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart =>cart.hidden
)

export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedItemPrice, cartItem) => accumulatedItemPrice + (cartItem.quantity*cartItem.price), 0))

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedItem, cartItem) => accumulatedItem + cartItem.quantity, 0)
)