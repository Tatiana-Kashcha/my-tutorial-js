//завдання
//// Отримати масив імен усіх користувачів (поле name).

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const usersName = users.map(({ name }) => name);
// console.log(usersName);

//  Напишіть функцію getUsersByColor(users, color), яка отримує масив користувачів
//   і колір очей та повертає масив користувачів з таким кольором (властивість eyeColor)

// const getUsersByColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);

// }
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))

// task 5
// Напиши функцію calculateTotalBalance(users), яка поверне загальну суму балансів (поле balance) користувачів

// function calculateTotalBalance(users) {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// }

// console.log(calculateTotalBalance(users));

// task 6
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const allSkils = users.flatMap(user => user.skills);

// const newskils = new Set(allSkils);

// const newSortSkils = [...newskils].sort((a, b) => a.localeCompare(b));

// console.log(newSortSkils);

// task 7
// В каждом массиве есть уникальная строка, в которой не повторяются буквы. Найдите и выведите в консоль эту строчку.должен быть такой результат
// findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']); // === 'foo'
// findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']); // === 'abcd'
// findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // === 'qwe'

// task 7 - Рішення Антона ------------------------
// function findUniq(arr) {
//   let newArr = arr.map(a => {
//     return [...new Set(a.toLowerCase())].sort().join('');
//   });
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) return arr[i];
//   }
// }

// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); //працює
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); //працює
// console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); //працює
// console.log(findUniq(['camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); // нема відрізняючого елемента //працює

// task 7 - Рішення Саші (для трошки іншого масиву) -------------------
// const arrayUniquse = [];
// function findUniq(arr) {
//   const newArr = arr.map(string => {
//     return string.split('').sort().join('');
//     // return [...string].sort().join("");
//   });
//   for (let i = 0; i < newArr.length; i++) {
//     const comparisonElement = newArr[i];
//     let acc = 0;
//     newArr.forEach(element => {
//       if (comparisonElement === element) {
//         acc += 1;
//       }
//     });
//     if (acc === 1) {
//       arrayUniquse.push(arr[i]);
//     }
//   }
//   return arrayUniquse;
// }

// console.log(
//   findUniq(['qwe', 'camp', 'acmp', 'pmac', 'hgt', 'yytr', 'yytr', 'camp', 'cp', 'apmc', 'pmac']) //працює
// );

// Працює, але на одному масиві. Якщо на всіх масивах, то додає попередній результат до наступного!!!!

// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); //не працює! 'foo'
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); //не працює! 'abcd'
// console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); //не працює! 'qwe'
// console.log(findUniq(['camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); // нема відрізняючого елемента //не працює!

// // task 7 - Рішення ментора ------------------------
// function findUniq(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     //у поточному елементі масиву літери сортуємо по зростанню
//     const normalizeValue = array[index].split('').sort().join('');

//     //робимо копію оригінального масиву
//     const copyOriginalArray = [...array];

//     // видаляємо з копії оригінального масиву поточний елемент
//     copyOriginalArray.splice(index, 1);

//     //в кожному рядку в новому масиві (без поточного видаленого елемента) теж літери сортуємо по зростанню
//     const withoutElementArray = copyOriginalArray.map(el => el.split('').sort().join(''));

//     //перевіряємо, якщо в масиві що лишився після видалення елемента, вже немає дубляжів, то це і є наш результат
//     if (!withoutElementArray.includes(normalizeValue)) {
//       return array[index];
//     }
//   }
//   return 'not found the uniq string =(';
// }

// console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); //працює
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); //працює!
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); //працює!
// console.log(findUniq(['camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); // нема відрізняючого елемента //працює

// // task 7 - Рішення Надін -----------------------------------------------
// const items = ['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'];

// const numbers = items.map(items => {
//   return items.charCodeAt(0);
// });
// console.log(numbers);

// // const dublicats = numbers.filter((number, index, numbers) => {
// //   return numbers.indexOf(number) !== index;
// // });
// // console.log(dublicats);

// let uniqueNumber = numbers[0];

// for (const number of numbers) {
//   if (number === uniqueNumber) {
//     uniqueNumber = number;
//   }
// }

// console.log(uniqueNumber);
// console.log(items[numbers.indexOf(uniqueNumber)]);

// function findUniq(array) {
//   const numbers = array.map(array => {
//     return array.charCodeAt(0);
//   });
//   console.log(numbers);

//   let uniqueNumber = numbers[0];

//   for (const number of numbers) {
//     if (number === uniqueNumber) {
//       uniqueNumber = number;
//     }
//   }

//   console.log(uniqueNumber);

//   const item = numbers.indexOf(uniqueNumber);
//   console.log(item);

//   const finish = array.find((element, index) => index === item);
//   console.log(finish);
// }

// --------дивний результат виконання!!!? але зайвий елемент знаходить---------------------------------
// findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']); //працює
// findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']); //працює!
// findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']); //працює!
// findUniq(['camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']);

// ------------------------------------------
// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently.
//         It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: instance => {
//       instance.element().querySelector('a').onclick = instance.close;
//     },
//   }
// );

// instance.show();
