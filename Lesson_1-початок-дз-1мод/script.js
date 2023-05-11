// https://github.com/ArtemRysich/Group_77

// https://developer.mozilla.org/en-US/
// https://uk.javascript.info/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// console.log('Hello world');
// let value;
// console.log(value);
// value = 1;
// console.log(value);

// console.log(3 === "3"); // Number vs String
// console.log(3 == "3");  // Number vs Number

//
// 1 undefined => false
// 2 null      => false
// 3 0         => false
// 4 NaN       => false
// 5 clg       => false
// 6 false     => false

// console.log(Boolean("false")); =>
// console.log(!!"false");

// var

// const a = 10;
// // a = 15
// let b; // undefined
// b = 15;
// b = '15';
// console.log(b);
// console.log(a);
// var a = 10;
// console.log(a);

// Примітивні типи даних - імутабельні типи даних
// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null

// const a = 10;

// a = a + 2;
// a = 12;
// a += 2

// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().Перевір що буде в консолі при
// значеннях 27.3 та 27.9.

// const value = 27.5;

// console.log(Math.ceil(value)); // Округлить завжди в сторону більшого значення
// console.log(Math.floor(value)); // Округлить завжди в сторону меньшого значення
// console.log(Math.round(value)); // Округлить завжди по математичному принципу

// Example 5 - Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const name = "Artem"
// const age = 28;

// const result = name + ' years ' + age;
// console.log(result);

//  String являється домінуючим типом даних
// const c = 10 + 22 + "11" + 44;
// console.log(typeof c);

// const a = 2 * "3";
// console.log(typeof a);

// const b = 6 - '3';
// console.log(typeof b);

// const value = 10;
// const value_2 = '15';

// const result = value - Number(value_2);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// // const message = companyName + " " + 'has' + " " + (repairBots + defenceBots) + " bots in stock ";
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',','.'));
// // weight = Number(weight)

// height = Number(height);
// // height = +height;
// // Boolean
// // !!

// // console.log(typeof height);

// // const bmi = weight / Math.pow(height, 2);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);  //true

// console.log(10 >= '7'); // true
// // https://unicode-table.com/en/#0031
// // console.log('2' >= '2');

// console.log('2' < '12'); '2' < '1' 32 < 31

// console.log('4' == 4); 4 == 4 // true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// true => 1
// false => 0
// console.log(1 == true);//true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true "P" < 'p' 50 < 70

// console.log('Papaya' === 'papaya'); 50 === 70

// console.log('papaya' < 'papaub'); //false
// p 70
// a 61
// p 70
// a 61
// y  79      u 75

// console.log(undefined == null); 0 0

// console.log(undefined === null);

// Example 8 - Логічні оператори
// Яким буде результат виразів?
// && І
// Повертає перший false або останій true
// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi');//kiwi
// true   true   true
// console.log(true && 0 && 'kiwi'); // 0

// || АБО
// Або повертає перше значення яке приведеться до true або останій false

// console.log(true || 3); //true

// console.log( 3 ||true || 4); 3
// true
// console.log('sdafgh' || false || 7); //'sdafgh'

// console.log(null || 2 || undefined); //2
// false   true
// console.log((1 && null && 2) > 0);
// // 1 && null && 2 => null
// // 1 => true
// // null  => false

// // 2
// // console.log((null) > 0);
// // console.log(Number(null)); => 0
// // 0 > 0 false

// console.log(null || (2 && 3) || 4);

// 1 null => false
// 2 || АБО ШУКАЄ ПЕРШИЙ TRUE
// 3 2 && 3
// 4 2 => true
// 5 3 => true
// 3 || 4 => 3

// Example 9 - Значення за замовчуванням та оператор нульового злиття (??)

//  || АБО він працює на 6 значень які повертають false
// 1 undefined => false
// 2 null      => false
// 3 0         => false
// 4 NaN       => false
// 5 ''       => false
// 6 false     => false

// ?? він працює на 2 значення null undefined

// const incomingValue = 5;
// // const result = incomingValue + Number('a11')// 16
// let test = 0;
// console.log(test);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// const value = test ?? 'some value';
// console.log(value);
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value);

// ------------Це вже моє заняття по 1 модулю-----------------

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${3500} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//     const result = (a + b + c);
//   console.log(`Addition result equals ${result}`);

// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message);
//   return message;
// };
// makeMessage("IT", 1000);
// makeMessage("IT-IT", 2000);
// makeMessage();

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//  console.log(totalPrice);
//   return totalPrice;
// };
// calculateTotalPrice(2, 300);
// calculateTotalPrice(4, 900);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   const message = `You ordered droids worth ${
//       orderedQuantity * pricePerDroid + deliveryFee} credits.
//     Delivery (${deliveryFee} credits) is included in total price.`;

//   console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 30);
// makeOrderMessage(3, 400, 30);

// function isAdult(age) {
//   const passed = age >= 18;

//   console.log(passed);
//   return passed;
// }
// isAdult(14);
// isAdult(18);
// isAdult(24);

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   console.log(message);
//   return message;
// }
// checkAge(17);
// checkAge(27);

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//     } else {
//        message = "Order is processed, our manager will contact you.";
//   }
//    console.log(message);
//   return message;
// }
// checkStorage(3, 3);
// checkStorage(3, 5);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice} credits left`;
//     }
//   console.log(message);
//   return message;
// }
// makeTransaction(100, 2, 300);
// makeTransaction(100, 2, 100);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   console.log(message);
//   return message;
// }
// checkPassword(null);
// checkPassword("jqueryismyjam");
// checkPassword();

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";

//   const isMatch = password === SAVED_PASSWORD;

//   console.log(isMatch);
//   return isMatch;
// }
// isValidPassword();
// isValidPassword("jqueryismyjam");
// isValidPassword("jqueryyjam");

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   console.log(message);
//   return message;
// }
// checkStorage(100, 0);
// checkStorage(100, 200);
// checkStorage();

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//     if (totalSpent > 50000 || totalSpent === 50000) {
//       discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//       discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//       discount = BRONZE_DISCOUNT;
//     } else discount = BASE_DISCOUNT;

//   console.log(discount);
//   return discount;
// }
// getDiscount(26000);

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(1, 10, 4);
// isNumberInRange(1, 10, 11);

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType ==="pro"||subType ==="vip");
//   console.log(canAccessContent);
//   return canAccessContent;
// }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// function checkStorage(available, ordered) {
//   let message;

//     message = ordered > available ? "Not enough goods in stock!"
//         : "The order is accepted, our manager will contact you";

//     console.log(message);
//   return message;
// }
// checkStorage(100, 50);

// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   console.log(price);
//   return price;
// }
// getSubscriptionPrice("starter");
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;

//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;

//         default:
//             message = "Access denied, wrong password!";
//     }

//   console.log(message);
//   return message;
// }
// checkPassword(null);
// checkPassword();
// checkPassword("jqueryismyjam");

// function getShippingCost(country) {
//   let message;
// Change code below this line
//    switch (country) {
//      case "China":
//        message = `Shipping to ${country} will cost 100 credits`;
//        break;

//      case "Chile":
//        message = `Shipping to ${country} will cost 250 credits`;
//        break;

//      case "Australia":
//        message = `Shipping to ${country} will cost 170 credits`;
//        break;

//      case "Jamaica":
//        message = `Shipping to ${country} will cost 120 credits`;
//        break;

//      default:
//        message = "Sorry, there is no delivery to your country";
//    }
// Change code above this line
//  console.log(message);
//   return message;
// }
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Australia");
// getShippingCost("Jamaica");
// getShippingCost();

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   console.log(message);
//   return message;
// }
// getNameLength("poly");

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// function getSubstring(string, length) {
//     const substring = string.slice(0, length);

//     console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 8);

// function formatMessage(message, maxLength) {
//   let result;

//     if (message.length <= maxLength) {
//     result = message;
//   } else result = message.slice(0, maxLength) + "...";

//    console.log(result);
//   return result;
// }
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Vestibulum facilisis purus nec", 20);

// function normalizeInput(input) {
//     const normalizedInput = input.toUpperCase();

//    console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("HEllo");

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("HEllo");

// function checkForName(fullName, name) {
//   const result = (fullName.includes(name));
//   console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");

// function checkForSpam(message) {
//   let result;

//     if (
//       message.toLowerCase().includes("spam") ||
//       message.toUpperCase().includes("spam")) {
//       result = true;
//     } else if (
//       message.toLowerCase().includes("sale") ||
//       message.toUpperCase().includes("sale")) {
//       result = true;
//     } else result = false;

//   console.log(result);
//   return result;
// }
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("Amazing SalE, only tonight!");
