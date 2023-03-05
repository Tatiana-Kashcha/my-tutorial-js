// ---------------------------практика lesson2------------------------------------------------------

//task1 lesson2
//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const userKey = Object.keys(user);

// for (const key of userKey) {
//     console.log(`${key}: ${user[key]}`)
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 1000,
//   poly: 1600,
//   ajax: 1470,
// };

// let totalSalary = 0;
// function getTotalSalary(salaries) {
//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName){
// for (const stone of stones){
//   if(stone.name === stonesName){
//     return stone.price*stone.quantity
//   }

// }
// }
// console.log(calcTotalPrice(stones, "rubble"))

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     this.prop1 = Number(a);
//     this.prop2 = Number(b);
//   },
//   sum() {
//     if (!isNaN(this.prop1) && !isNaN(this.prop2)) {
//       return this.prop1 + this.prop2;
//     }
//     return null;
//   },
//   mult() {
//     if (!isNaN(this.prop1) && !isNaN(this.prop2)) {
//       return this.prop1 * this.prop2;
//     }
//     return null;
//   },
// };
// calculator.read("five", 0);
// console.log(calculator.sum());
// console.log(calculator.mult());

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}

// function updateObject(object, removeKey) {
//   const newObject = { ...object };
//   delete newObject[removeKey];
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b"));


// ----------------------------домашка--------------------------------------

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}


// 7. Напишіть функцію changeObject, яка приймає як параметр об'єкт
// та повертає масив, в якому кожен елемент це масив, який складається з двох елементів [key, value]
// Очікуваний результат console.log(changeObject({ a: 1, b: 2, c: 3 })) // [["a", 1], ["b", 2], ["c", 3]]


// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// const account = {
//   //поточний баланс рахунку
//   balance: 0,
//   //Історія трансакцій
//   transactions: [],
//   //Метод приймає суму та тип трансакції
//   //створює об'єкт трансакції за зразком {id, type, amount}
//   //додає його у масив трансакцій
//   //в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
//   createTransaction(type, amount) {},
//   //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
//   deposit(amount) {},
//   //Метод приймає суму трансакції і відповідає за віднімання суми до балансу.
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
//   withdraw(amount) {},
//   //Метод повертає поточний баланс
//   getBalance() {},
//   //Метод шукає та повертає об'єкт трансакції по id
//   getTransactionDetails(idForSearch) {},
//   //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//   getTotalSumByType(type) {},
// };


//9. Напишіть функцію isPlainObject, яка перевіряє чи є параметр простим об'єктом, а не масивом або null.
// Якщо так, то повертає true, в противному випадку false


//10. Напишіть функцію isEmpty , яка перевіряє чи порожній обєкт. Якщо так, то повертає true, в противному випадку false


//11. Напишіть дві функції
// letMeSeeYourName(callback) - має запитувати ім'я користувача через prompt і викликати callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не пустий
