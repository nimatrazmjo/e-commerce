export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existringCartItem = cartItems.find(item => item.id === cartItemsToAdd.id);
    if (existringCartItem) {
        return cartItems.map(item => item.id === cartItemsToAdd.id ? { ...item, quantity: item.quantity+1}: item);
    }
    return [...cartItems, {...cartItemsToAdd, quantity: 1}];
}