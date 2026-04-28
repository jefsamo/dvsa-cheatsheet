import test, { describe } from "node:test";
import { calculateTotal } from "./priceCalculator.js";
import assert from "node:assert";

describe("calculateTotal", () => {
  test("calculates total price correctly", () => {
    assert.equal(calculateTotal(10, 3), 30);
  });

  test("returns 0 when quantity is 0", () => {
    assert.equal(calculateTotal(10, 0), 0);
  });

  // test("throws for negative price", () => {
  //   assert.throws(() => calculateTotal(-5, 2), {
  //     message: "Price and quantity must be prositive",
  //   });
  // });
  // test("throws for negative quantity", () => {
  //   assert.throws(() => calculateTotal(5, -1), {
  //     message: "Price and quantity must be prositive",
  //   });
  // });
});
