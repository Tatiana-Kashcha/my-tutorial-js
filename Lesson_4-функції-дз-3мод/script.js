// https://codeguida.com/post/199
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=uk

// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];

// // declaration
// function someName(arr, value) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }
// console.log(someName(arr, 3));
// console.log(someName(arr1, 4));
// console.log(arr);
// console.log(arr1);


// expression

// const someName = function (arr, value) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }

// someName(arr, 3)
// someName(arr1, 4)
// console.log(arr);
// console.log(arr1);


// const arr = [423, 56, 23, 4];
// const arr1 = [1, 45, 1, 2]

// function add(param) {
//     let sum = 0;
//     for (const num of param) {
//         sum += num
//     }
//     return sum;
// }
// console.log(add(arr));
// console.log(add(arr1));





// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];


// function someName(arr, value = 1) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }

// someName(arr)
// someName(arr1, 4)
// console.log(arr);
// console.log(arr1);



// function add() {

//     // const arr = Array.from(arguments);
//     // const arr = [...arguments];
//     // console.log(arr);
// }


// add(1, 2, 3, ['a', 'b']);
// add(4, 5, 6, 7);
// add(7, 8, 9, 1, 1, 2);




// function checkValue(a, b) {
//     const result = a + b;
//     if (result > 0) {
//         return true;
//     } else if (result < 0) {
//         return false;
//     }

//     return 'це нуль'
// }

// console.log(checkValue(1, 4));

// console.log(checkValue(1, -4));

// console.log(checkValue(1, -1));

// let a = 10

// function foo() {
//     a = 15;
// }
// foo()
// a = 22;
// foo()
// console.log(a);






// let a = 10;

// function foo(){
//     a = 11;
//     let a = 14;

// }
// foo()
// a = 19;

// console.log(a);



// let a = 10;

// function foo() {
//     let a = 14;
//     a = 11;

// }
// foo()
// a = 19;

// console.log(a);


// let a = 10;

// function foo() {
//     a = 100;
// }
// foo()
// a = 19;

// if (a < 100){
//     foo()
//     a = 14
// }else{
//     a = 13;
// }

// console.log(a);

// const arr = [1, 2, 3];

// function foo(a) {
//     a.splice(0, 1)
// }
// arr.splice(0, 1)
// foo(arr)
// console.log(arr);




// let a = 15;


// function foo(x) {
//     x = 10;
// };

// console.log(foo(a));
// console.log('a', a);




// function add(a, b) {
//     return a + b
// }


// function checkValue(a, b) {
//     const value = add(a, b)
//     if (value > 0) {
//         return true;
//     } else if (value < 0) {
//         return false;
//     }

//     return 'це нуль'
// }

// checkValue(1, 1)


// function foo() {
//     boo()
// }

// function boo() {
//     foo()
// }
// foo()


// якщо після двох функцій записати функцію що буде результатом перших двох яким буде правильний синтакс - до прикладу function add (a,b) + function checkVelue (a,b)?

// const result = add(1, 2) + checkValue(4, -3)
// console.log(result);


// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number(weight / Math.pow(height, 2).toFixed(1))
//     return Number((weight / height ** 2).toFixed(1))

// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8



// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.


// function min(a, b) {
//     if (a > b) {
//         return b;
//     }

//     return a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1





// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     // const first = Number(dimensions[0]);
//     // const second = Number(dimensions[1]);

//     // return first * second

//     return Number(dimensions[0]) * Number(dimensions[1]).toString()
//     console.log(second);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('18 11'));




// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 -'Poly' виведе  3 - Ajax.

// function logItems(items) {
//     console.log('--------------');
//     // for (let i = 0, num = 1; i < items.length; i+=1, num+=1){
//     //     console.log(`${num} - ${items[i]}`);
//     // }
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i+1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);





// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     names = names.split(',')
//     phones = phones.split(',')

//     // for(let i = 0; i< names.length; i+=1){
//     //     console.log(`${names[i]} - ${phones[i]}`);
//     // }
//     // console.log(phones);

//     for (let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
//     console.log(phones);

// }
// printContactsInfo(
//     'Jacob,William,Solomon,Artem',
//     '89001234567,89001112233,890055566377,890055566378',
// );




// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber() {
//     // let max = arguments[0];
//     // for(const arg of arguments){
//     //     if(max < arg){
//     //         max = arg
//     //     }
//     // }

//     // return max;
// // console.log(arguments);
//     return Math.max(...arguments);
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83




// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     // const numbers = Array.from(arguments)
//     // const numbers = [...arguments]
//     // console.log(numbers);
//     let sum = 0;

//     for (const num of numbers) {
//         sum += num
//     }

//     return sum / numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2





// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60).toString().padStart(2,'0');
//     minutes = (minutes % 60).toString().padStart(2,'0');
//     console.log(typeof minutes);
//     return `${hours}:${minutes}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"




// Example 9 - Колекція курсів (includes, i ndexOf,push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// function addCourse(name){
//     if(courses.includes(name)){
//         return 'Ви вже маєте такий курс'
//     }
//     courses.push(name)
// }

// // addCourse('Express');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS'));; // 'Ви вже маєте такий курс'
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function removeCourse(name) {
//     // if (courses.includes(name)) {
//     //     const idx = courses.indexOf(name);
//     //     courses.splice(idx, 1);
//     //     return;
//     // }
// // includes => !!~indexof
//     const idx = courses.indexOf(name);
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям не знайдено"
// }


// const arr = ['a', 'b', 'c'];
// // const idx = arr.indexOf('a');//0 => false
// // console.log(!!~idx);//-1 => true
// // console.log(!!-(idx + 1));//-1 => true

// const idx = arr.indexOf('d') // -1 => true
// console.log(!!~idx); // 0 => false
// console.log(!!-(idx + 1));
// if (!!~idx) {
//     console.log('yes');
// } else {
//     console.log('no');
// }



// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// const courses = ['HTML', 'CSS', 'JavaScript', 'Express', 'React', 'PostgreSQL'];

// function updateCourse(oldName, newName) {
//     // if (courses.includes(oldName)) {
//     //     const idx = courses.indexOf(oldName);
//     //     courses.splice(idx, 1, newName);
//     //     return;
//     // }

//     const idx = courses.indexOf(oldName);
//     if (!!~idx) {
//         courses.splice(idx, 1, newName);
//         return;
//     }

//     return 'Курс із таким ім\'ям не знайдено'

// }

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// // console.log(updateCourse('Vue','NestJS')); // 'Курс із таким ім'ям не знайдено'

// const arr = [1,2,3]
// console.log(arr);

// function foo(){
// console.log(arguments);
// }
// foo(1,2,3)

//________________Це вже моє заняття по 3 модулю__________________

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(firstTag);
// console.log(lastTag);
// console.log(numberOfTags);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Jamaica', city: 'Kingston'};
// // apartment.location = {};  //варіант запису1
// // apartment.location = { country: ' ', city: ' ' }; //варіант запису2
// // apartment.location.country = 'Jamaica';  //варіант для запису1,2
// // apartment.location.city = 'Kingston';  //варіант для запису1,2
// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);
// console.log(apartment);

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags
// };
// console.log(product.name);

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// const person = {
//   firstName: 'John',
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);


// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//       values.push(apartment[key]);
//     }
//     //  console.log(apartment.hasOwnProperty(key));
// }
// console.log(keys);
// console.log(values);


// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//     }
//       console.log(object.hasOwnProperty(key));
//   }
   
//   console.log(propCount);
// }
// countProps({ name: 'Mango', age: 2 });

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
//     console.log(key);
//     console.log(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
  
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   console.log(propCount);
  
// }
// countProps({ name: 'Mango', age: 2 });

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const values = Object.values(salaries);

//     for (const value of values) {
//       totalSalary += value;
//     }
//   console.log(values);
//   console.log(totalSalary);
// }
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// /**
//  * Find the product in the array and output the price
//  * @param {String} productName
//  * @returns {Number} prise || null
//  */
// function getProductPrice(productName) {
    // for (const product of products) {
    //   if (product.name === productName) {
    //       console.log(product.price);
    //       return;
    //     }
    // }
//     console.log(null);
// }
// getProductPrice('Radar');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const values = [];
    
//     for (const product of products) {
//       if (product[propName]) {
//           values.push(product[propName]);
//        }
//     }
//     console.log(values);
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//         console.log(product.price * product.quantity);
//         return;
//       }
//   }
//       console.log(0);
// }
// calculateTotalPrice('Radar');


//------тема деструктурізація--------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = yesterday;
// // const today = today;
// // const tomorrow = tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highIcon);
// console.log(meanTemperature);


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // варіант1 теж робочий
// // for (const color of colors) {
// //     const { hex, rgb } = color;
// //     hexColors.push(hex);
// //     rgbColors.push(rgb);
// // }
// // варіант2 ок для автоперевірки
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// console.log(highTomorrow);



// function calculateMeanTemperature(forecast) {
//     const {
//       today: { low: todayLow, high: todayHigh },
//       tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;
  
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }
// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });


//---------------тема розпділ--------------

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);


// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
  
//     const newTask = { completed: false, category: 'General', priority: 'Normal', ...data };
//     console.log(newTask);

// }
// makeTask({});
// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });


// function add(...args) {
//   let total = 0;
//     for (let i = 0; i < args.length; i += 1) {
//       total += Number(args[i]);
//     }
//   console.log(total);
//   console.log(args);
// }
// add(12, 4, 11, 48);
// add(74, 11, 62, 46, 12, 36);

// 2 варіант рішення - більш оптимізоване

// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   console.log(total);
// }
// add(12, 4, 11, 48);
// add(74, 11, 62, 46, 12, 36);


// function addOverNum(...args) {
//   let total = 0;

//     for (let i = 0; i < args.length; i += 1) {
//       if (args[i] > args[0]) {
//         total += Number(args[i]);
//       }
//     }

//   console.log(total);
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8) //повертає 71
// addOverNum(50, 15, 27) //повертає 0
// addOverNum(20, 74, 11, 62, 46, 12, 36) //повертає 218


// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//    for (const arr of array) {
//      if (args.includes(arr)) {
//        matches.push(arr);
//      }
//    }
  
//   console.log(matches);
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) //повертає [1, 2]
// findMatches([63, 11, 8, 29], 4, 7, 16) //повертає []


// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     console.log('Returning all books');
//     // return 'Returning all books'; для автоперевірки
//   },
//   addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//     // return `Adding book ${bookName}`; для автоперевірки
//   },
//   removeBook(bookName) {
//     console.log(`Deleting book ${bookName}`);
//     // return `Deleting book ${bookName}`; для автоперевірки
//   },
//   updateBook(oldName, newName) {
//     console.log(`Updating book ${oldName} to ${newName}`);
//     // return `Updating book ${oldName} to ${newName}`; для автоперевірки
//   },
// };
// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Haze');
// bookShelf.removeBook('Red sunset');
// bookShelf.updateBook('Sands of dune', 'Dune');


// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         const idx = this.books.indexOf(oldName);
//         this.books.splice(idx, 1, newName);
      
//         console.log(this.books);
//     },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');


// const atTheOldToad = {
//     potions: [],
// };
// console.log(atTheOldToad.potions);


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     console.log(atTheOldToad.potions);
//   },
// };
// atTheOldToad.getPotions();

// робочий варіант в вскоді
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//       atTheOldToad.potions.push(potionName);
//       console.log(atTheOldToad.potions);
//    },
// };
// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');

// автоперевірка приймає варіант з назвою метода this.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     console.log(this.potions);
//   },
// };
// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
    
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     console.log(this.potions);
//   },
// };
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
      
//       const idx = this.potions.indexOf(oldName);
//         this.potions.splice(idx, 1, newName);
//         console.log(this.potions);
//     },
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');

// 41 комплексне завдання автоперевірки
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     // return this.potions; // для автопеевірки
//     console.log(this.potions);
//   },
//     addPotion(newPotion) {

//         for (const potion of this.potions) {
//           if (potion.name === newPotion.name) {
//             console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//             // return `Error! Potion ${newPotion.name} is already in your inventory!`;
//           }
//         }
      
//       this.potions.push(newPotion);
//       console.log(this.potions); // проміжні результати для тестування
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const idx = this.potions.indexOf(potion); // indexOf(potion) шукає об'єкт з потрібною строкою
//         this.potions.splice(idx, 1);

//         console.log(this.potions); // проміжні результати для тестування
//         console.log(potion); // проміжні результати для тестування
//       }
//     }
//     console.log(`Potion ${potionName} is not in inventory!`);
//     //  return `Potion ${potionName} is not in inventory!`; // для автопеевірки
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         const idx = this.potions.indexOf(potion);
//         this.potions[idx].name = newName;

//         console.log(this.potions); // проміжні результати для тестування
//         // console.log(potion.name === oldName); // проміжні результати для тестування
//       }
//     }
//     console.log(`Potion ${oldName} is not in inventory!`);
//     //  return `Potion ${oldName} is not in inventory!`; // для автопеевірки
//   },
//   // Change code above this line
// };
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');

// const arr = [2, 4, 6];
// const result = arr.filter(el => el * 2);
// console.log(result);