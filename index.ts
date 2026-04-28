console.log("Hello, World");

const username: string = "Olawale";
let loginCount: number = 0;

const isAdmin: boolean = false;

const tags: string[] = ["frontend", "typescript"];

const taxRate: number = 0.2;

let total = 100;

total = total + total * taxRate;

console.log(`Total value is ${total}`);

const firstName = "Olawale";
const role = "Developer";
const intro = `${firstName} is a ${role}`;

const greet = (name: string) => {
  return `Hello, ${name}`;
};

const res = greet(firstName);

const add = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

const subtract = (firstNumber: number, secondNumber: number) => {
  //   if (secondNumber > firstNumber) {
  //     return secondNumber - firstNumber;
  //   }
  return Math.abs(firstNumber - secondNumber);
};

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => {
  return num * 2;
});

const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens);

const totals = numbers.reduce((prev, currentValue) => prev + currentValue, 0);

const firstLarge = numbers.find((num) => num > 6);

console.log(firstLarge ?? "Not found");

const hasOdd = numbers.some((num) => num % 2 !== 0);

const hasOddFunc = (numbers: number[]) => {
  return numbers.every((num) => num % 2 !== 0);
};

console.log(hasOddFunc(numbers));

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Mouse", price: 25 },
  { id: 2, name: "Keyboard", price: 45 },
  { id: 3, name: "Monitor", price: 90 },
  { id: 4, name: "Mic", price: 15 },
];

const expensiveProducts = products.filter((product) => product.price > 50);

console.log(expensiveProducts);

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// const API_KEY = "dccc5f03";

// const movieForm = document.getElementById("movieForm")!;
// const movieInput = document.getElementById("movieInput") as HTMLInputElement;
// const result = document.getElementById("result") as HTMLDivElement;

// const fetchMovie = async (movieName: string) => {
//   const res = await fetch(
//     `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
//       movieName
//     )}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch movie");
//   }
//   return res.json();
// };

// movieForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const movieName = movieInput.value.trim();

//   if (!movieName) {
//     result.textContent = "Please enter a movie name";
//     return;
//   }

//   result.textContent = "Loading...";

//   try {
//     const movie = await fetchMovie(movieName);

//     result.innerHTML = `
//     <p><strong>Title:</strong> ${movie.Title}</p>
//     <p><strong>Year:</strong> ${movie.Year}</p>
//     <p><strong>Genre:</strong> ${movie.Genre}</p>
//     <p><strong>Plot:</strong> ${movie.Plot}</p>
//   `;
//   } catch (error: any) {
//     result.textContent = error.message;
//   }
// });

// const loadData = async () => {
//   try {
//     const data = await fetchMovie("The Count of Monte Cristo");
//     console.log(data.Title);
//   } catch (error: any) {
//     console.error("Something went wrong", error.message);
//   }
// };

// loadData();

// setTimeout(() => {
//   loadData();
// }, 2000);

function wait(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), ms);
  });
}

// wait(1000).then(console.log);

interface Productt {
  id: string;
  name: string;
  price: number;
  description?: string;
}

type ProducttPreview = Pick<Productt, "id" | "name" | "price">;
type ProducttUpdate = Partial<Productt>;

const baseUser = {
  id: "1",
  firstName: "shopman",
};

const updatedUser = { ...baseUser, firstName: "Olawale" };
console.log(updatedUser);

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

const isPalindrome = (input: string): boolean => {
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

console.log(isPalindrome("moom0"));

function removeDuplicates(items: number[]): number[] {
  return [...new Set(items)];
}

const removeDuplicates2 = (items: number[]): number[] => {
  let newArr: number[] = [];

  for (let i = 0; i < items.length; i++) {
    if (!newArr?.includes(items[i]!)) {
      newArr.push(items[i]!);
    }
  }
  const res = new Set(items);

  return [...res];
};

console.log(removeDuplicates2([1, 1, 2, 3, 4, 4, 5, 5]));

function capitaliseWords(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitaliseWords("olawale shopeyin"));

function reverseString2(input: string): string {
  let word = "";
  for (let i = input.length - 1; i >= 0; i--) {
    word += input[i];
  }

  return word;
}

console.log(reverseString2("niyepohS elawalO"));

const add2 = (a: number, b: number) => {
  return a + b;
};

const toUpper = (input: string) => {
  return input.toUpperCase();
};

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

const findLargest = (items: number[]): number => {
  return Math.max(...items);

  let max: number = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i]! > max) {
      max = items[i]!;
    }
  }

  return max;
};

console.log(findLargest([2, 9, 4, 1]));

const reverse = (input: string): string => {
  return input.split("").reverse().join("");
};

const countChars = (input: string): number => {
  return input.length;
};

const removeSpaces = (input: string): string => {
  return input.split(" ").join("");
};

const countVowels = (input: string): number => {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i]!)) {
      count++;
    }
  }

  return count;
};

countVowels("education"); // 5

console.log(countVowels("education"));

const doubleNumbers = (numbers: number[]): number[] => {
  return numbers.map((num) => num * 2);
};

const getEven = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((prev, cur) => prev + cur, 0);
};

const sortAsc = (numbers: number[]): number[] => {
  return numbers.sort((a, b) => b - a);
};

sortAsc([5, 1, 9, 2]); // [1,2,5,9]

console.log(sortAsc([5, 1, 9, 2]));
