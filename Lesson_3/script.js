// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/
// // index     0    1     2      3
// const arr = [1, null, true, 'hello'];
// //           1    2     3      4

// const first = arr[0];
// const last = arr[arr.length - 1]
// console.log(last);

//  Array.isArray()
// console.log(typeof arr);//object
// console.log(Array.isArray(arr));


// for(let item of arr){
//     if(typeof item === 'boolean'){
//         item = 'world'
//     }
//     console.log(item);
// // console.log(typeof item);

//     // console.log(item);
// }
// console.log(arr);



// // index     0    1     2      3
// const arr = [1, null, true, 'hello'];
// //           1    2     3      4
// for(let i = 0; i < arr.length; i+=1){
//     if(typeof arr[i] === 'boolean'){
//         arr[i] = 'world'
//     }
//     console.log(arr[i]);
// }
// console.log(arr);


// let a = 10;
// let b = a;

// a+=10;

// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;
// console.log(a === b);
// const c = [1, 2, 3];
// const d = [1, 2, 3];
// console.log([1, 2, 3] === [1, 2, 3]);
// console.log(c === d);
// a.push(4)
// b.push(5)
// console.log(a);
// console.log(b);




// let a = false

// let b = a;

// console.log(a);
// console.log(b);
// a+=2
// b+=' world'
// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;


// a.push(4)
// b.push(77)
// console.log(a);
// console.log(b);


// let number = 10;
// number += 12;

// number = number + 12
// const str = 'hello world';

// const arr = [1,2,3];
// arr.push(4)
// arr.shift()
// console.log(arr);






//  split join
// const str = 'hello  world';
// const result = str.split(' ');
// console.log(result);
// const respons = result.join('-')
// console.log(respons);



// indexof includes
// const arr = [1, 2, 3, 4, 5, 6];
// const idx = arr.indexOf(14);
// if(idx === -1){

// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// if(!!~idx){

// }
// console.log(idx);
// const arr = [1, 2, 3, 4, 5, 6];
// const idx = !!~arr.indexOf(111)
// console.log(idx);

// if(idx){

// }



// pop push
// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(7, 8, 9);
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);


// shift unshift
// const arr = [1, 2, 3, 4, 5, 6];

// arr.unshift('hello', "world")
// arr.shift()
// arr.shift()
// console.log(arr);


// splice

// const arr = [1, 2, 3, 4, 5, 6];

// arr.splice(2, 2, 99)
// console.log(arr);


// slice
//       0  1  2  3  4  5
// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.slice(2, 3)
// console.log(arr);
// console.log(result);


// const arr = [1, 2, 3, 4, 5, 6];
// const copy = arr.slice();
// const result = [...arr]
// // console.log(result);
// console.log(result === copy);


// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.concat([9, 10], [7, 8])
// const result = [...arr, ...[7, 8], ...[9, 10]]
// console.log(result);




// Перерва до 21.20



// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол')

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae')
// genres.splice(genres.length, 0, "Рок-н-рол");
// // genres.splice(0, 1)
// // genres.splice(0, 0, 'Country', 'Reggae')


// genres.splice(0, 1, 'Country', 'Reggae')
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ')
// const first = Number(arr[0]);
// const second = Number(arr[1]);
// console.log(first * second);



// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль
// рядок у форматі номер_елемента: значення_елемента.Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i+=1){
//     console.log(`${i+1} - ${fruits[i]}`);
// }

// for(let i = 0, num = 1; i < fruits.length; i+=1, num+=1){
//     console.log(`${num} - ${fruits[i]}`);
// }


// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names
// та phones зберігаються рядки імен та телефонних номерів, розділені комами.Порядковий номер імен та
// телефонів у рядках вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377';

// names = names.split(',');
// phones = phones.split(',');

// for (let i = 0; i < names.length; i += 1) {
// console.log(`${names[i]} - ${phones[i]}`);
// }
// console.log(phones);

// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//     }
// console.log(phones);



// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.Скрипт
// повинен працювати для будь - якого рядка.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.pop()
// arr.shift()
// console.log(arr.join(' '));

// const arr = string.split(' ')
// const result = arr.slice(1, arr.length - 1);

// const arr = string.split(' ').slice(1, -1);
// console.log(arr.join(' '));


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// const string = 'Welcome to the future';
// const arr = string.split('').reverse().join('');
// console.log(arr);




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою
// літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort((a, b) => a.localeCompare(b));
// console.log(langs);







// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
// для будь - якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// // const min = numbers.sort((a,b) => a - b)[0]
// let min = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// console.log(min); // 1


// const str = "hello, world  my, name"
// const result = str.replaceAll(',', '').split(' ')

// for (let i = 0; i < result.length; i += 1) {
//     if (!result[i]) {
//         result.splice(i, 1)
//     }
// }
// console.log(result);

// -------------------Це вже моє заняття по 2 модулю----------

// function getExtremeElements(array) {
  //     const first = array[0];
  //     const last = array[array.length - 1];
  //     console.log(first, last);
    
      // повертає елементи масиву
  //   console.log(array[0], array[array.length - 1]);

  //повертає масив
//   array = [array[0], array[array.length - 1]];
//   console.log(array);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
    
//   console.log(words);
// }
// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// function calculateEngravingPrice(message, pricePerWord) {
//     console.log(message.split(' ').length * pricePerWord);
// }
// calculateEngravingPrice('JavaScript is in my blood', 10);


// const message = 'java script';
// const pricePerWord = 5;
// function calculateEngravingPrice(message, pricePerWord) {
//   message = message.split(' ').length * pricePerWord;

//   console.log(message);
// }

// calculateEngravingPrice(message, pricePerWord);



// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   console.log(string);
// }
// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');

//  split join
// const str = 'hello  world';
// const result = str.split(' ');
// console.log(result);
// const respons = result.join('-')
// console.log(respons);

// const values = '8 11';
// const arr = values.split(' ')
// const first = Number(arr[0]);
// const second = Number(arr[1]);
// console.log(first * second);
// console.log(typeof values);

//  Array.isArray()
// console.log(typeof arr);//object
// console.log(Array.isArray(arr));




// function slugify(title) {
//     // в рядочку
// //   let slug = title.toLowerCase().replaceAll(' ', '-');
//     // з перетворенням на масив
//     let slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug);
// }
// slugify("Arrays for begginers");
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer for TWO WEEKS');


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         console.log(newArray.slice(0, maxLength));
//         return;
//     }
//     console.log(newArray);
//     return;
// }

// makeArray(['Mango', 'Ajax', 'Poly', 'Kiwi'], ['Peach', 'Ajax', 'Houston'], 4);
// makeArray(['Mango', 'Kiwi'], ['Peach', 'Houston'], 6);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// сума чисел
// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <=number; i += 1) {
//     sum += i;
//     }
//     console.log(sum);
// }
// calculateTotal(3);


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += Number(order[i]);
//   }
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);


// function findLongestWord(string) {
//   const newStringArr = string.split(' ');
//   let longestWordArr = " ";

//   for (let i = 0; i < newStringArr.length; i += 1) {

//     if (newStringArr[i].length > longestWordArr.length) {
//       longestWordArr = newStringArr[i];
//     }
//   }
//   console.log(longestWordArr);
//   console.log(newStringArr);

// }
// findLongestWord('Google do a roll');
// findLongestWord("May the force be with you");


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
 
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
  
// }
// createArrayOfNumbers(14, 17);

// const values = '8 11';
// const arr = values.split(' ')
// const first = Number(arr[0]);
// const second = Number(arr[1]);
// console.log(first * second);
// console.log(typeof values);

// function filterArray(numbers, value) {
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (Number(numbers[i]) > value) {
//       newArr.push(Number(numbers[i]));
//     }
//   }
//   console.log(newArr);
// }
// filterArray([1, 2, 3, 4, 5], 3);


// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   console.log(fruits.includes(fruit));
// }
// checkFruit('plum');
// checkFruit('mandarin');

// function getCommonElements(array1, array2) {
//   const newArr = [];
//   for (let i = 0; i < array2.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   console.log(newArr);
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (const num of order) {
//      total += num;
//    }
    
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   // рефакторився оцей код
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   console.log(filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);


// function getEvenNumbers(start, end) {
//   const numbers = [];

//     for (let i = start; i <= end; i += 1) {
//       if (!(i % 2 )) {
//         numbers.push(i);
//       }
//     }
//   console.log(numbers);
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);


// function findNumber(start, end, divisor) {
  
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       console.log(i);
//       return i;
//     }
//   }
// }
// findNumber(2, 6, 5);


// function findNumber(start, end, divisor) {
  
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       console.log(number);
//       break;
//     }
//   } 
// }
// findNumber(2, 6, 5);

// function includes(array, value) {
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       console.log('true');
//       return true;
//       break;
//     }
//   }
//   console.log('false');
//   return false;
  
// }
// includes([1, 2, 3, 4, 5], 3);