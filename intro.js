export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;

  return a;
}

export const fizzBuzz = (number) => {
  //   if (number < 0) {
  //     throw new Error("number must be greater than zeros");
  //   }
  if (number % 5 === 0 && number % 3 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number.toString();
  }
};

export const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    return NaN;
  }

  let res = 0;

  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }

  return res / numbers.length;
};

export const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

export const checkStringLength = (word) => {
  if (word.length === 0) {
    return 0;
  }

  return word.length;
};
