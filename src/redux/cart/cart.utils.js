export const addItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (!existingItem) return [...cartItems, { ...item, quantity: 1 }];

  return cartItems.map((cartItem) =>
    cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
