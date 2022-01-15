export const addItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (!existingItem) return [...cartItems, { ...item, quantity: 1 }];

  return cartItems.map((cartItem) =>
    cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const removeItem = (cartItems, item) => {
  const targetItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (targetItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== targetItem.id);

  return cartItems.map((cartItem) =>
    cartItem.id === targetItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
