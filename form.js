import { validateProductForm } from "./validation.js";

export function setupProductForm() {
  const form = document.getElementById("productForm");
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = {
      name: nameInput.value,
      price: Number(priceInput.value),
    };

    const result = validateProductForm(product);

    if (!result.isValid) {
      errorMessage.textContent = Object.values(result.errors).join(", ");
      return;
    }

    errorMessage.textContent = "Product saved successfully";
    form.reset();
  });
}
