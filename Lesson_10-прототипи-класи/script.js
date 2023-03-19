// const objA = {
//     name : 'object A',
//     sayHello(){
//         console.log(`Hello from A name ${this.name}`);
//     }
// }

// const objB = Object.create(objA);
// objB.name = 'object B';
// objB.sayHello = function(){
//     console.log(`Hello from B name ${this.name}`);
// }
// // objB.age = 18;
// // console.log(objB);
// // objB.sayHello()
// // console.log(objA.age);
// // console.log(objB);

// const objC = Object.create(objB)
// objC.name = 'object C'
// console.log(objC);
// objC.sayHello()

// class User {
//     static counter = 0;
//     static addUser() {
//         // User.counter +=1;
//         this.counter += 1;
//     }
//     static getCounter() {
//         console.log(this.counter);
//     }
//     #password
//     constructor({
//         name,
//         age,
//         email = 'None',
//         password
//     }) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.#password = password;
//         User.addUser();
//     }
//     returnName() {
//         return this.name;
//     }

//     #getPasswordLength() {
//         console.log('in private method');
//         return this.#password.length;
//     }
//     get userAge() {
//         return this.age;
//     }

//     set userAge(newAge) {
//         console.log('in seter age');
//         this.age = newAge;
//     }

//     get password() {
//         console.log('get', this.#password);
//     }

//     set password(newPassword) {
//         if (this.#getPasswordLength() > 7) {
//             this.#password = newPassword;
//         } else {
//             console.log('Введіть більше 7 символів');
//         }
//     }

// }

// class Human extends User {
//     constructor({
//         damage,
//         ...args
//     }) {
//         super(args)
//         this.damage = damage
//     }
//     attack() {
//         instance2.hp -=this.damage
//         console.log(`Attack with damage ${this.damage}`);
//     }
// }

// class Orck extends User {
//     constructor({
//         mana,hp,
//         ...args
//     }) {
//         super(args)
//         this.hp = hp
//         this.mana = mana
//     }
//     spell() {
//         console.log(`Spell AVADAKEDAVRA ${this.mana}`);
//     }
// }

// class Warrior extends Human {
//     constructor({
//         hp,
//         ...args
//     }) {
//         super(args)
//         this.hp = hp;
//     }
// }
// const instance2 = new Orck({
//     name: 'User B',
//     age: 19,
//     email: 'qwet@gmail.com',
//     password: 'qwerty1231',
//     mana: 400,
//     hp: 100
// });
// const instance = new Warrior({
//     name: 'User A',
//     age: 18,
//     email: 'test@gmail.com',
//     password: 'qwerty123',
//     damage: 700,
//     hp: 1200
// });
// const qwerty = new Warrior({
//     name: 'User QWERTY',
//     age: 18,
//     email: 'test@gmail.com',
//     password: 'qwerty123',
//     damage: 1700,
//     hp: 999
// });
// instance.attack()
// instance2.spell()
// console.log(instance);
// instance.attack()

// instance.password = 'abcdef999'
// instance.password

// console.log(qwerty);

// console.log(instance2);

// const instance = new User('User A', 18, 'test@gmail.com', 'qwerty123');

// const instance2 = new User('User B', 20);
// const instance3 = new User('User C', 24);
// const instance4 = new User('User D', 24);
// User.getCounter();

// instance.password;
// instance.password = '1234asdfghj'
// instance.password;
// instance.userAge
// instance.userAge = 99;
// instance.userAge
// console.log(instance);

// console.log(instance2);

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
// class Blogger {
//     constructor({
//         email,
//         age,
//         numberOfPosts,
//         topics
//     }) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//     email: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//     email: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику
//  отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         if (!this.items.includes(item)) {
//             this.items.push(item);
//         }
//     }
//     removeItem(item) {
//         //-1 => true
//         // 0 > ... 0 => false
//         // ~0 > -1
//         // ~-1 > 0
//         //  -(x + 1)
//         // const idx = this.items.indexOf(item);
//         // if (!!~idx) { //idx !== -1 idx >=0 idx + 1
//         //     this.items.splice(idx, 1);
//         // }
//         this.items = this.items.filter(val => val !== item)
//     }
// }
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроби через
// гетер та сетер login та email.

// class User {
//     #login;
//     #email;
//     constructor({
//         login,
//         email
//     }) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }

//     get login() {
//         return this.#login
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority. Додай класу статичну
// властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }
//     constructor(item) {
//         this.items = item;
//     }
//     addNote(item) {
//         const inArray = this.items.some(({
//             text
//         }) => text === item.text);
//         if (!inArray) {
//             this.items.push(item)
//         }
//     }
//     removeNote(text) {
//         console.time('Test');
//         // const idx = this.items.findIndex(({ text: noteText}) => noteText === text)
//         // this.items.splice(idx,1)
//         // Test: 0.031005859375 ms

//         this.items = this.items.filter(({
//             text: noteText
//         }) => noteText !== text)
//         // Test: 0.01513671875 ms
//         console.timeEnd('Test');
//     }
//     updateNote(noteText, value) {
//         const result = this.items.find(({
//             text
//         }) => text === noteText);
//         console.log(result);

//         if(result){
//             result.priority = value;
//         }
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'Моя перша замітка',
//     priority: Notes.Priority.LOW
// });

// console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes);

//------------------------дз---------------------------
// Додаткове завдання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean}
// і оголошує одну властивість on - стан вкл / викл(true / false).
// За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

//------------------Регістрація юзерів-----------------------
// const form = document.querySelector('.js-form');
// const signIn = document.querySelector('.js-in');
// const title = document.querySelector('.js-title');

// form.addEventListener('submit', onSubmit);
// signIn.addEventListener('submit', onSignIn);
// const users = [];

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// function onSubmit(evt) {
//   evt.preventDefault();
//   const { name, email } = evt.currentTarget.elements;

//   users.push(new User(name.value, email.value));
//   console.log(users);
// }

// function onSignIn(evt) {
//   evt.preventDefault();
//   const { email } = evt.currentTarget.elements;
//   const result = users.find(({ email: userEmail }) => email.value === userEmail);
//   console.log(result);
//   if (result) {
//     title.textContent = result.name;
//   }
// }

//---------------------6 mod приклад з конспекта----------------------

// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const list = document.querySelector('.usernames');
// console.log(list);
// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

//----------------------------------------
// 1TASK

// const categoriesList = document.querySelectorAll('#categories li.item');
// console.log(categoriesList); //масив li.item
// const categoriesItem = categoriesList.length;
// console.log('Number of categories:', categoriesItem); //кількість категорій 3

// categoriesList.forEach(element => {
//   // const categoriesTitle = element.querySelectorAll('h2')[0].textContent; //альтернативний запис
//   const categoriesTitle = element.querySelector('h2').textContent;
//   console.log('Category:', categoriesTitle); //назва категорій

//   const categoriesTitleElement = element.querySelectorAll('li').length;
//   console.log('Elements:', categoriesTitleElement); //кількість елементів в категорії
// });

//----------------------------------------
// 2TASK

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const ingredientsList = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = ingredient;
//   ingredientsItem.classList.add('item');
//   ingredientsList.append(ingredientsItem);
// }
// console.log(ingredientsList);

//----------------------------------------
// 3TASK

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// 3TASK 1варіант
const galleryImagesEl = document.querySelector('.gallery');
galleryImagesEl.style.backgroundColor = '#f1b6a1';
galleryImagesEl.style.display = 'flex';
galleryImagesEl.style.listStyle = 'none';
galleryImagesEl.style.justifyContent = 'center';
galleryImagesEl.style.padding = '30px 0';

const makeGalleryImages = imgEl => {
  const { url, alt } = imgEl;
  return `<li class="list-item"><img src=${url} alt=${alt} height = 200></li>`;
};
const itemImages = images.map(makeGalleryImages).join('');
galleryImagesEl.insertAdjacentHTML('beforeend', itemImages);

const imageItemEl = galleryImagesEl.querySelectorAll('.list-item').forEach(item => {
  item.style.display = 'block';
  item.style.marginLeft = '30px';
});
galleryImagesEl.firstElementChild.style.marginLeft = '0';

// console.log(galleryImagesEl.firstElementChild); //собі для перевірки
console.log(galleryImagesEl);

//------------------------

// 3TASK 2варіант
// const galleryImagesEl = document.querySelector('.gallery');
// galleryImagesEl.style.backgroundColor = '#f1b6a1';
// galleryImagesEl.style.display = 'flex';
// galleryImagesEl.style.listStyle = 'none';
// galleryImagesEl.style.justifyContent = 'center';
// galleryImagesEl.style.padding = '30px 0';

// const itemImages = images.forEach(item => {
//   const imageItemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = item.url;
//   imageEl.alt = item.alt;
//   imageEl.height = 200;
//   imageEl.style.display = 'block';

// console.log(galleryImagesEl.hasChildNodes()); //перевірка чи є вкладені вузли-Children
// galleryImagesEl.hasChildNodes() === false   // мій початковий варіант тернарника (((
//   ? (imageItemEl.style.marginLeft = '0')
//   : (imageItemEl.style.marginLeft = '30px');

//   imageItemEl.style.marginLeft = galleryImagesEl.hasChildNodes() ? '30px' : '0'; // нормальний тернарник

//   imageItemEl.appendChild(imageEl);
//   galleryImagesEl.appendChild(imageItemEl);
// });
// console.log(galleryImagesEl);

//---------------------------------------------------
//4TASK

// let counterValue = 0;
// const value = document.querySelector('#value');

// const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
// const decrementClick = () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
//   console.log(counterValue); //собі для перевірки
// };
// decrementBtn.addEventListener('click', decrementClick);

// const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
// const incrementClick = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
//   console.log(counterValue); //собі для перевірки
// };
// incrementBtn.addEventListener('click', incrementClick);

//----------------------------------------
// 7TASK

// const sizeInput = document.querySelector('#font-size-control');
// const textOutput = document.querySelector('#text');
// console.log(textOutput); //собі для перевірки
// console.log(sizeInput); //собі для перевірки
// console.log(sizeInput.min); //собі для перевірки
// console.log(sizeInput.max); //собі для перевірки

// const sizeControl = () => {
//   textOutput.style.fontSize = sizeInput.value + 'px';
//   console.log(sizeInput.value + 'px'); //собі для перевірки
// };
// sizeInput.addEventListener('input', sizeControl);
// console.log(textOutput.style); //собі для перевірки

//----------------------------------------

//---------------------6 mod приклади з конспекта----------------------

// galleryImages.insertAdjacentHTML('beforeend', itemImages);

// `<li>${image}</li>`;
// console.log(item);

// const image = document.createElement('img');
// image.src = 'https://placeimg.com/640/480/nature';
// image.alt = 'Nature';

// const itemImages = images.map(item => `<li>${item}</li>`).join('');
// console.log(item);

//--------------------------------------------------------
// const list = document.querySelector('.list');
// const newTechnologies = ['React', 'TypeScript', 'Node.js'];

// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
//---------------------------------------------------------------

// const text = message === messageUser ? 'True!' : "Don't you know? ECMAScript!";

// text[0] === 'a' ? (message = 'yes') : (message = 'no');

//-------------------------------------------------------------
// const list = document.querySelector('.list');
// const newTechnologies = ['React', 'TypeScript', 'Node.js'];

// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
//---------------------------------------------------------------

// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

//---------------------6 mod приклади з конспекта---------------------
// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });

// function fun1() {
//   var rng = document.getElementById('r1'); //rng - это Input
//   var p = document.getElementById('one'); // p - абзац
//   p.innerHTML = rng.value;
//   console.log(rng.value);
// }
//--------------------

//----------
// orderedItems.forEach(element => {
//   totalPrice += element;
// });

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
//-----------
// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(item => (total += item));
//   return total / args.length;
// };

// firstArray.forEach(element => {
//   if (secondArray.includes(element)) {
//     commonElements.push(element);
//   }
// });
//---------
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// // console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// // console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// // console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// // console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// // console.log(firstMenuItem);
//---------
