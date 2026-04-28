import { setupProductForm } from "./form";

describe("product form", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="productForm">
        <label for="name">Product name</label>
        <input id="name" name="name" />

        <label for="price">Price</label>
        <input id="price" name="price" type="number" />

        <button type="submit">Save product</button>

        <p id="errorMessage" aria-live="polite"></p>
      </form>
    `;
  });

  test("shows error message when form is submitted empty", () => {
    setupProductForm();

    const form = document.getElementById("productForm");
    const errorMessage = document.getElementById("errorMessage");

    form.dispatchEvent(new Event("submit"));

    expect(errorMessage.textContent).toContain("Product name is required");
    expect(errorMessage.textContent).toContain(
      "Price must be greater than zero"
    );
  });

  test("shows success message when valid form is submitted", () => {
    setupProductForm();

    document.getElementById("name").value = "Keyboard";
    document.getElementById("price").value = "50";

    const form = document.getElementById("productForm");
    const errorMessage = document.getElementById("errorMessage");

    form.dispatchEvent(new Event("submit"));

    expect(errorMessage.textContent).toBe("Product saved successfully");
  });
});
