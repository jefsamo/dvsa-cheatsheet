import { describe, expect, it } from "vitest";
import {
  calculateAverage,
  checkStringLength,
  factorial,
  fizzBuzz,
  max,
} from "../intro";

describe("max", () => {
  const a = 2;
  const b = 3;
  it("should return the first argument if it is greater", () => {
    ///Arrange

    // Act
    const result = max(a, b);

    // Assert
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    // Assert
    expect(max(2, 3)).toBe(3);
  });
});

describe("FizzBuzz", () => {
  it("should return FizzBuzz if divisible by 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if divisible 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return Buzz if divisible 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return the string value if not divible by both 5 and 3", () => {
    expect(fizzBuzz(19)).toBe("19");
  });
  it("should throw error is number is negative", () => {
    expect(fizzBuzz(1)).toThrow("number must be greater than zero");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an emoty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
});

describe("factorial", () => {
  it("should return 1 if number is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if number is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 6 if number is 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("should return 120 if number is 5", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("checkStringLength", () => {
  it("should return 0 if string is empty", () => {
    expect(checkStringLength("")).toBe(0);
  });
  it("should return 5 of the string is 'empty'", () => {
    expect(checkStringLength("empty")).toBe(5);
  });
});
