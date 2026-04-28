import { getProducts } from "./productsApi.js";
import test, { describe } from "node:test";

describe("getProducts", () => {
  test("returns products when API call succeeds", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mouse" },
      ],
    });

    const products = await getProducts();

    expect(products).toHaveLength(2);
    expect(products[0].name).toBe("Laptop");
  });

  test("throws error when API call fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(getProducts()).rejects.toThrow("Failed to fetch products");
  });
});
