export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existringCartItem = cartItems.find(item => item.id === cartItemsToAdd.id);
    if (existringCartItem) {
        return cartItems.map(item => item.id === cartItemsToAdd.id ? { ...item, quantity: item.quantity+1}: item);
    }
    return [...cartItems, {...cartItemsToAdd, quantity: 1}];
}

export const RemoveItemFromCart = (cartItems, cartItemsToRemove) => {
    const existringCartItem = cartItems.find(item => item.id === cartItemsToRemove.id);

    if (existringCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);
    }
    if (existringCartItem.quantity >= 1 ) {
        return cartItems.map(item => item.id === cartItemsToRemove.id ? { ...item, quantity: item.quantity-1}: item);
    }
    return [...cartItems, {...cartItemsToRemove, quantity: 1}];
}


export const clearItemFromCart = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id)
}
