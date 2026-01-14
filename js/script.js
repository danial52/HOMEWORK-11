// document.addEventListener("DOMContentLoaded", () => {
//   const h1 = document.querySelector("h1");

//   console.log("worked");

//   console.log(h1);
// });

// const test1 = "",
//   test2 = "",
//   test3 = [];

// test3.push("dwadwa");

// console.log({ test1, test2, test3 });
// const h1 = document.querySelector("h1");

// if (h1) {
//   console.log("Тег h1 найден");
// } else {
//   console.log("Тег h1 не найден");
// }

// h1 ? console.log("Тег h1 найден") : console.log("Тег h1 не найден");

// const user = {
//   firstName: "Alex",
//   lastName: "Smith",
// };

// try {
//   console.log(user.birthDate.day);
// } catch (error) {
//   console.log("Произошла ошибка в поле user.birthDate.day", error);
// }

// console.log("Наш скрипт отработал до конца");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((item) => {
//   console.log(item);
// });

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
//   if (arr[index] === 3) {
//     break;
//   }
// }

// const filteredArr = arr.filter((item) => item < 4);

// const newArray = arr.map((item) => ({
//   name: `Name #${item}`,
//   id: item,
// }));

// console.table(newArray);
// console.log(newArray);

// console.log(arr);

// Мутирует исходный массив
// const nArr = [];
// arr.forEach((item) => nArr.push(item));
// // const popedArr = nArr.pop();
// const popedArr = [...arr].pop();

// console.log(popedArr);
// console.log(arr);

// const testStr2 = {
//   name: "dwadwadwadwa",
// };

// const testStr = {
//   name: "dwadwadwadwa",
// };

// Object.freeze(testStr);

// testStr.age = 222;
// console.log(testStr);

// console.log(testStr == testStr2);

// const user = {
//   firstName: "Alex",
//   lastName: "Smith",
//   age: 22,
//   city: "Kentau",
// };

// delete user.lastName;

// console.log(user);

// const userKeys = Object.keys(user);
// const userValues = Object.values(user);

// console.log(userValues);

// userKeys.forEach((key) => console.log(key, user[key]));

// console.log(window.window.window.window.window.window);

// console.log("" || "Сработал твикс (или)");

// console.log("" ?? "Сработал твикс ?? (или)");

// const myTitle =
//   document.querySelector("h2").textContent ??
//   document.querySelector("h1").textContent;

// console.log(myTitle);
// Homework
let a = 1;
let b = 2;
console.log(b, a);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
console.log(isEven(-2)); // true

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function filterEven(arr) {
  const array = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      array.push(element);
    }
  });
  return array;
}

console.log(filterEven([12, 56, 11, 23, 56, 20, 11, 13]));

function Temp(f) {
  return (c = ((f - 32) * 5) / 9);
}
console.log(Temp(50));

function Temp2(c) {
  return (f = (c * 9) / 5 + 32);
}
console.log(Temp2(30));

const regex = /[^А-Яа-яA-Za-z0-9]/g;

const Tolo = (str) => {
  const string = str.toLowerCase().replace(regex, "");
  const reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

console.log(Tolo("race car"));
console.log(Tolo("home"));

function sumNumber(arg2) {
  let sum = 0;
  for (let i = 0; i < arg2.length; i++) {
    sum += arg2[i];
  }
  return sum;
}

console.log(sumNumber([1, 1, 1, 1]));

function longestWord(arg3) {
  let checkWord = "";
  for (const fruit of arg3) {
    if (fruit.length > checkWord.length) {
      checkWord = fruit;
    }
  }
  return checkWord;
}
console.log(longestWord(["kiwi", "banana", "apple", "Mango"]));

function countProps(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count;
}
console.log(countProps({ a: 1, b: 2, c: 3 }));

function printTo(n) {
  let count = 1;
  while (count < n) {
    console.log(`Число ${count}`);
    count++;
  }
}
printTo(10);

function manualFindIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
}

console.log(manualFindIndex([1, 2, 3, 4, 5], 4));
