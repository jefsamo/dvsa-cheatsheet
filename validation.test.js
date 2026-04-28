import { validateProductForm } from "./validation.js";

import test, { describe } from "node:test";

describe("validateProductForm", () => {
  test("returns valid when product data is correct", () => {
    const product = {
      name: "Laptop",
      price: 500,
    };

    const result = validateProductForm(product);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  test("returns error when name is empty", () => {
    const product = {
      name: "",
      price: 500,
    };

    const result = validateProductForm(product);

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe("Product name is required");
  });

  test("returns error when price is zero", () => {
    const product = {
      name: "Laptop",
      price: 0,
    };

    const result = validateProductForm(product);

    expect(result.isValid).toBe(false);
    expect(result.errors.price).toBe("Price must be greater than zero");
  });

  test("returns multiple errors when name and price are invalid", () => {
    const product = {
      name: "",
      price: -20,
    };

    const result = validateProductForm(product);

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe("Product name is required");
    expect(result.errors.price).toBe("Price must be greater than zero");
  });
});
