import { describe } from "node:test";
import { calculateTotal } from "./priceCalculator";

describe("calculateTotal", () => {
  test("calculates total price correctly", () => {
    expect(calculateTotal(10, 3)).toBe(30);
  });

  test("returns 0 when quantity is 0", () => {
    expect(calculateTotal(10, 0)).toBe(0);
  });

  test("throws error for negative price", () => {
    expect(() => calculateTotal(-10, 2)).toThrow(
      "Price and quantity must be positive"
    );
  });

  test("throws error for negative quantity", () => {
    expect(() => calculateTotal(10, -2)).toThrow(
      "Price and quantity must be positive"
    );
  });
});
