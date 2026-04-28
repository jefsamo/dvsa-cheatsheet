export const calculateTotal = (price, quantity) => {
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be greater than 0");
  }

  return price * quantity;
};
