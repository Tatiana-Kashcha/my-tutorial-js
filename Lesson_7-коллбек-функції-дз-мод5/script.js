// const numbers = [1, 2, 3, 4];

// function add(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total += value
//     }
//     return total
// }

// function sum(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total *= value
//     }
//     return total
// }

// function foo(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total -= value
//     }
//     return total
// }
// function result(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total /= value
//     }
//     return total
// }

// add(numbers)

// const numbers = [1, 2, 3, 4];

// function foo(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     };
//     return total;
// }

// const add = (a, b) => a + b;
// const sum = (a, b) => a * b;

// console.log(foo(numbers, add));
// console.log(foo(numbers, sum));

// function foo(a, b) {
//     console.log(a);
//     console.log(b);
// }
// foo(10, 20)

// declaration
// foo(2,3)
// function foo(a, b) {
// console.log(a,b);
// }

// //expression
// const boo = function(a,b){
//     console.log(arguments);
// }
// boo(10, 12, 1, 2, 3, 5);
// boo(10, 12, 1, 2, 3, 5, 2, 3, 5);
// // // arrow function
// const arrow = (...args) => {
//     console.log(args);
// }
// arrow(10, 12, 1, 2, 3, 5);
// arrow(10, 12, 1, 2, 3, 5, 2, 3, 5);

// const user = {
//     nameUser: 'Test name',
//     say(){
//         console.log(this);
//         console.log(`Hello ${this.nameUser}`);
//     },
//     sayHello: () => {
//         console.log(this);
//         console.log(`Hello ${this.nameUser}`);
//     }
// }
// user.say()
// user.sayHello()
// console.log(this);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = [];

// for (const value of numbers) {
//     if (!(value % 2)) {
//             result.push(value)
//         }
// }

// console.log(result);

// const result = numbers.filter(a => !(a%2))

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// item - ітеруємий елемент (обов'зковий)
// idx - індекс ітеруємого елементу
// arr - масив який перебираємо
// numbers.forEach(function (item, idx, arr) {
//     numbers[idx] = item * 2
// })
// for(const item of numbers){
//     item = item*2
// }
// for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] * 2
// }

// const add = (a, b) => a + b;
// let total = 0;

// numbers.forEach(item => total = add(total,item))
// console.log(total);

// ПЕРЕРВА ДО 21.10

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення
// function createProduct(product, callback) {
// const obj = {
//     id: Date.now(),
//     ...product
// }
// // console.log(obj);
// callback(obj)
// }

// function logProduct({name}) {
// console.log(`Product name ${name}`);
// }

// function logTotalPrice({price,quantity}) {
// console.log(`Total price ${price * quantity}`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit ${TRANSACTION_LIMIT}`)
//         } else if (this.balance < amount) {
//             onError(`Lack of funds`)
//         } else {
//             this.balance -= amount;
//             onSuccess('Funds were withdrow')
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit ${TRANSACTION_LIMIT}`)
//         } else if (amount <= 0) {
//             onError('Nice try 😎')
//         } else {
//             this.balance += amount;
//             onSuccess(`Deposit added ${amount}, total ${this.balance}`)
//         }
//     }
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// console.log(account);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct1(product) {
//   console.log(product.name);
// }
// const logProduct = ({name}) => console.log(name);

// function logTotalPrice1(product) {
//   console.log(product.price * product.quantity);
// }

// const logTotalPrice = ({price,quantity}) => console.log(price * quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct1);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice1);

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount > this.balance) {
//             onError(`Amount can't exceed account balance of ${this.balance} credits`);
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount <= 0) {
//             onError(`Amount must be more than 0 credits`);
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     // test: () => {
//     //     console.log(this);
//     // }
// };
// account.test()
// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);
// console.log(handleSuccess);
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 5 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value * 2;
// //   }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], value => value * 2)
// );
// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value - 10;
// //   }),
// // );

// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10),
// );

// // console.log(
// //     each([64, 49, 36, 25, 16], function (value) {
// //         return Math.sqrt(value);
// //     }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)),
// );
// // console.log(
// //     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //         return Math.ceil(value);
// //     }),
// // );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value))
// );
// // console.log(
// //     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //         return Math.floor(value);
// //     }),
// // );

// const floor =  value => Math.floor(value);
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], floor));
// console.log(each([3.5, 21.1, 16.4, 9.7, 11.3], floor));

// Example 6 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = items => items.forEach((item, idx)=>console.log(`${idx + 1}- ${item}`))

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({
//     names,
//     phones
// }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     nameList.forEach((item, idx) => console.log(`${item} - ${phoneList[idx]}`));
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
// const calculateAverage = (...args) => {
//     let total = 0;
//     args.forEach(item => total += item)
//     return total / args.length
// }

// const calculateAverage = (...args) => args.reduce((acc, item) => acc + item, 0) / args.length;

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// const arr = [1, 2, 3, 4, 5];

// const result = arr.map(item =>  item * 2)
// console.log(result);

//------------------------------дз 5 модуль---------------------------

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));

// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// ---------------тема прототипи-----------

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child.hasOwnProperty('name'));

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
// console.log(new Car('Audi', 'Q3', 36000));

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// class Car {
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }

//     getPrice() {
//        return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

// class Storage {
//   constructor( items ) {
//     this.items = items;
//     }

//     getItems() {
//        return this.items;
//     }

//     addItem(newItem) {
//         this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//----------------------тема Інкапсуляція------------------

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// class Car {
//   // Change code below this line
//     #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand; // в автоперевірці ок
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand; // в автоперевірці ок
//   }
//   // Change code above this line
// }
// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 }); // (const car) - в автоперевірці це не вказано в методах перевірки!!!
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); // чому не працює в вскоді? { model: "Q3", price: 36000 }
// console.log(car.getBrand()); // працює!
// console.log(car.changeBrand('Honda')); // чому не працює в вскоді?

// class Storage {
//     #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//----------------тема Гетери та сетери-------------------------------

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

//--приклад
// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

//--приклад перевірки умови виконання Сеттера----
// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// //--приклад
// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// class Car {
//   // Change code below this line
//     static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//       if (newPrice > Car.MAX_PRICE) {
//         return;
//       }
//        this.#price = newPrice;
//     }

//   // Change code above this line
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//--приклад
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//           return 'Error! Price exceeds the maximum';
//         }
//           return "Success! Price is within acceptable limits";
//     }
//    // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//------приклад
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

//----приклад------
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email, accessLevel);
//     this.accessLevel = accessLevel;
//     }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//----приклад------
// Уявімо, що вище є оголошення класу User
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }

  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
