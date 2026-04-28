export function validateProductForm(product) {
  const errors = {};

  if (!product.name || product.name.trim() === "") {
    errors.name = "Product name is required";
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = "Price must be greater than zero";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
