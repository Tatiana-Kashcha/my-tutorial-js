// https://www.geeksforgeeks.org/lodash-_-clone-method/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// const arr = [1, 2, 4];
// const arr1 = arr;

// console.log(arr === arr1);


// const arr = [1, 2, 4];
// const arr1 = [...arr];
// console.log(arr == arr1);




// const arr = [1, 2, 3];
// const arr1 = [1, 2];
// const [, , third = 9] = arr;

// // console.log(second);
// console.log(third);

// const name = 'USER';

// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {},
// }

// const {
//     name: userName
// } = user

// console.log(name);
// console.log(userName);
// // const {
// //     name = "value",
// //         age
// // } = user;
// const {
//     name : userName,
//         age
// } = user;
// console.log(userName);
// // console.log(userName);
// console.log(age);

// console.log(user);








// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//         cars : {
//             audi : 'A8'
//         }
//     },
// }

// const {name, skills : {js, cars:{audi}}, skills} = user;

// console.log(user.name);
// console.log(user.skills.js);
// console.log(user.skills.cars.audi);

// console.log(skills);
// console.log(js);
// console.log(audi);



// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//     },
// }

// const user1 = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         react: true
//     },
// }

// function foo({name , skills:{js = false}} = {}){
// console.log(name);
// console.log(js);
// }

// foo()

// const user = {
//     name: 'Test - user',
//     age: 22,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//     },
// }

// const user1 = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: false
//     },
// }

// const user2 = {
//     name: 'Test',
//     skills: {
//         html: false,
//         css: false,
//     },
// }

// const arr = [user, user1, user2];
// // name : userName

// for (const {
//         age: userAge = 0,
//         skills: {
//             js = false
//         }
//     } of arr) {
//     // console.log(userAge);
//     console.log(js);
// }















// const arr = [44, 11, 22, 4, 33];

// const min = Math.min( 44, 11, 22, 4, 33)
// const min = Math.min(...arr)
// const arr1 = [44, 11, 22, 4, 33];
// const arr1 = [...arr];

// console.log(arr === arr1);

// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: false
//     },
// };

// const user1 = {...user};
// console.log(user === user1);

// console.log(user.skills);
// console.log(user1.skills);

// console.log(user.skills === user1.skills);



// const arr = [1, 2, 3, 4, 5]
// //spread
// const copy = [...arr];
// console.log(copy);
// //rest
// const [first, second, ...args] = arr;
// console.log(first);
// console.log(second);
// console.log(args);



// const arr = [1, 2, 3, 4, 5];

// function foo(a, b, c, d, e) {
// console.log(a,b,c,d,e);
// }
// foo(...arr); // аргументи це spread

// function foo(a, b, c, ...args) { // параметри це rest
//     console.log(a, b, c);
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5);
// foo(11, 32, 43, 4, 5, 6, 7)



// Перерва до 21.20






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({weight, height}) {
// // console.log('weight',weight);
// // console.log('height',height);
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));



// Example 2 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     bots: {
//         repairBots,
//         defenceBots
//     }
// }) {
//     // console.log(companyName);
//     // console.log(repairBots);
//     // console.log(defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50
//     }
// }));



// Example 3 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// Рішення
// function getStockReport({
//     companyName,
//     stock
// }) {
//     const values = Object.values(stock)

//     let total = 0;

//     for (const value of values) {
//         total += value;
//     }

//     return `${companyName} has ${total} items in stock`
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"



// Example 4 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list: 'default,',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 5 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// function transformId({firstName,lastName, ...props}) {
// console.log(firstName);
// console.log(lastName);
// // console.log(props);

// props.fullName = firstName + ' ' + lastName
// return props
// // return {
// //     fullName: `${firstName} ${lastName}`,
// //     ...props
// // }
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );
// // {
// //     id: 1,
// //     fullName: 'Jacob Mercer',
// //     email: 'j.mercer@mail.com',
// //     friendCount: 40,
// //   }

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );


// const products = [{
//         name: "Radar",
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: "Scanner",
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: "Droid",
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: "Grip",
//         price: 1200,
//         quantity: 9,
//         cauntProp : true
//     },
// ];

// function getAllPropValues(propName) {
//     let cauntProp = [];
//     for (let product of products) {
//         // console.log(product[propName]);
//         // console.log(product["name"]);
//         if (product[propName]) {
//             cauntProp.push(product[propName]);
//         }
//     }
//     return cauntProp;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("namттттe"));

// product[propName] те саме, що product === propName?
// product[propName] === product.name
// "Grip" === "name"
// {
//     name: "Grip",
//     price: 1200,
//     quantity: 9,
//     cauntProp : true
// }

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
// (function (x) {
//     delete x;
//     return x;
//   })(1)


// const x = 1;
// delete x;
// console.log(x);

// const obj ={
//     x : 1,
//     y: 2
// }

// delete obj.x
// delete obj.y
// console.log(obj);


// x = 1;
// y = 100500
// console.log(x);
// console.log(window);
// delete window.x
// console.log(x);




// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//     icon: ''
// };
// // Change code below this line
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon : highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// // Change code above this line


// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// function makeTask(data) {
//     const completed = false;
//     const category = data.category || "General";
//     const priority = data.priority || "Normal";
//     const text = data.text;

//     const task = {
//         category,
//         priority,
//         text,
//         completed
//     };
//     return task;
// }
// а якщо так 30 зробити


// function findLongestWord(string) {
//     // Change code below this line
//     return string.split(' ').sort((a, b) => b.length - a.length)[0]


//     // Change code above this line
// }
// console.log(findLongestWord("May thethethe force be with you"));

//-------------4 мод Автопер тема callback функції--------------

// коментар до 2 завдання - імена параметрів функцій, які є callback-ом
// (525 deliverPizza, 529 makePizza) неважливі для параметрів самої функції callback (535)

// function deliverPizza(yk) {
//     return `Delivering ${yk} pizza.`;
// }

// function makePizza(ik) {
//     return `Pizza ${ik} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(ppe, callback) {
//     return callback(ppe);

// }
// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));


// ісходна умова 2 завдання
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         for (const pizza of this.pizzas) {
//           if (pizza === pizzaName) {
//             return onSuccess(pizzaName);
//           }
//         }
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
 
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// // ---рефакторинг цього коду------
// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }
// // -----------------------------
//    orderedItems.forEach(element => {
//         totalPrice += element;
//    });
    
//   // Change code above this line
//     // return totalPrice;
//     console.log(totalPrice);
// }
// calculateTotalPrice([164, 48, 291]);


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//
//   // ---рефакторинг цього коду------
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }
//  // -----------------------------------
//     numbers.forEach(element => {
//       if (element > value) {
//         filteredNumbers.push(element);
//         }
//     });
    
//     // return filteredNumbers;
//     console.log(filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   // ---рефакторинг цього коду------
// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //   }
//   // -----------------------------------
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
    
// //   return commonElements;
//   console.log(commonElements);
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);


// const calculateTotalPrice = (quantity, pricePerItem) => {
  
//     // return quantity * pricePerItem;
//     console.log(quantity * pricePerItem);
// }
// calculateTotalPrice(5, 100);


// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//     // return totalPrice;
//     console.log(totalPrice);
// };
// calculateTotalPrice([164, 48, 291]);


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // return filteredNumbers;
//   console.log(filteredNumbers);
// };
// filterArray([1, 2, 3, 4, 5], 3);


// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // return commonElements;
//   console.log(commonElements);
// };
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);


// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else if (element % 2 !== 0) {
//       newArray.push(element);
//     }
//   });
//   // return newArray;
//   console.log(newArray);
//   console.log(numbers);
// }
// changeEven([1, 2, 3, 4, 5], 10); //новий масив [1, 12, 3, 14, 5]

//-------------4 мод Автопер тема методи масиву--------------

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => planet.length);
// // console.log(planetsLengths);


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// const titles = books.map(book => book.title);
// console.log(titles);


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);


// const getUserNames = users => {
//   // return users.map(user => user.name);
//   console.log(users.map(user => user.name));
// };

// const getUserNames = users => {
//   // return users.map(user => user.email);
//   console.log(users.map(user => user.email));
// };
// getUserNames ([
//   {
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
// ]);


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((unique, idx) => allGenres.indexOf(unique) === idx);
// console.log(allGenres);
// console.log(uniqueGenres);


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);


// const getUsersWithEyeColor = (users, color) => {
//     // return users.filter(user => user.eyeColor === color);
//     console.log(users.filter(user => user.eyeColor === color));
// };
// getUsersWithEyeColor(
//   [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ],
// //   'blue',
// //   'brown',
//   'green'
// );


// const getUsersWithAge = (users, minAge, maxAge) => {
//   // return users.filter(user => user.age >= minAge && user.age <= maxAge);
//   console.log(users.filter(user => user.age >= minAge && user.age <= maxAge));
// };
//  getUsersWithAge([
//    {
//      name: 'Moore Hensley',
//      email: 'moorehensley@indexia.com',
//      eyeColor: 'blue',
//      friends: ['Sharron Pace'],
//      isActive: false,
//      balance: 2811,
//      gender: 'male',
//      age: 37,
//    },
//    {
//      name: 'Sharlene Bush',
//      email: 'sharlenebush@tubesys.com',
//      eyeColor: 'blue',
//      friends: ['Briana Decker', 'Sharron Pace'],
//      isActive: true,
//      balance: 3821,
//      gender: 'female',
//      age: 34,
//    },
//    {
//      name: 'Ross Vazquez',
//      email: 'rossvazquez@xinware.com',
//      eyeColor: 'green',
//      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//      isActive: false,
//      balance: 3793,
//      gender: 'male',
//      age: 24,
//    },
//    {
//      name: 'Elma Head',
//      email: 'elmahead@omatom.com',
//      eyeColor: 'green',
//      friends: ['Goldie Gentry', 'Aisha Tran'],
//      isActive: true,
//      balance: 2278,
//      gender: 'female',
//      age: 21,
//    },
//    {
//      name: 'Carey Barr',
//      email: 'careybarr@nurali.com',
//      eyeColor: 'blue',
//      friends: ['Jordan Sampson', 'Eddie Strong'],
//      isActive: true,
//      balance: 3951,
//      gender: 'male',
//      age: 27,
//    },
//    {
//      name: 'Blackburn Dotson',
//      email: 'blackburndotson@furnigeer.com',
//      eyeColor: 'brown',
//      friends: ['Jacklyn Lucas', 'Linda Chapman'],
//      isActive: false,
//      balance: 1498,
//      gender: 'male',
//      age: 38,
//    },
//    {
//      name: 'Sheree Anthony',
//      email: 'shereeanthony@kog.com',
//      eyeColor: 'brown',
//      friends: ['Goldie Gentry', 'Briana Decker'],
//      isActive: true,
//      balance: 2764,
//      gender: 'female',
//      age: 39,
//    },
//  ],
//     //  20, 30
//      30, 40
//     // 80, 100
//  );


// const getUsersWithFriend = (users, friendName) => {
//   // return users.filter(user => user.friends.includes(friendName));
//   console.log(friendName);
//   console.log(users.filter(user => user.friends.includes(friendName)));
// };
// getUsersWithFriend(
//   [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39,
//     },
//   ],
//   // 'Briana Decker'
//   // "Goldie Gentry"
//   // "Adrian Cross"
//   'Sharron Pace'
// );


// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   console.log(allFriends.filter((unique, idx) => allFriends.indexOf(unique) === idx));
// //   return allFriends.filter((unique, idx) => allFriends.indexOf(unique) === idx);
// };
// getFriends([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ]);


// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);


const getActiveUsers = users => {
    
};
