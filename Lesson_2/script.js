// https://medium.com/trabe/using-switch-true-in-javascript-986e8ad8ae4f
// https://javascript.info/garbage-collection

// const str = Number("12a");
// console.log('Number.isNaN', Number.isNaN(str));
// console.log('isNaN', isNaN(str));


//умова = true
// if(//умова){
//     //певна дія
// }

// if(5>6){ // 5>4 => true 5>6  => false
// console.log('Pravda');
// }else{
//     console.log('Ne pravda 😥');
// }


// if('Hello'){

// }


// const value = 10;


// if (value > 12) {
//     console.log('Більше 12');
// } else if (value > 11) {
//     console.log('Більше 11');
// } else if (value > 9) {
//     console.log('Більше 9');
// } else {
//     console.log('Меньше 9');
// }


// Парне число чи ні ????
// const value = 11;
// console.log(value % 2); //0 => false
// if(!(value % 2)){
// console.log("парне");
// }
// const result = value % 2 ? "Не парне" : "Парне";
// console.log(result);

// let result;

// if (!(value % 2)) { //value % 2 => 0 === 0
//     result = "Парне";
// } else {
//     result = "Не парне";
// }
// console.log(result);

// const value = Number(Prompt('Введіть число'))ж
// // const value = 10;

// switch (value) {
//     case 5:
//         console.log(5);
//         break;
//     case 10:
//         console.log(10);
//         break;
//     case 15:
//         console.log(15);
//         break;
//     default:
//         console.log('default');
// }



// Перерва до 20.55







// console.log(value);
// var value = 10;



// if(true){
//     var value = 10;
// }



// function foo(){
//     var value = 10;
// }
// console.log(value);


// Існує 3 області видимості

// 1 Глобальна
// 2 Блочна\Локальна
// 3 Функціональна

// const та let (ES6) мають лише Глобальну та Блочну\Локальну
// Все що знаходиться в фігурнич дужках вже по факту являється Блочна\Локальна
// let value = 10;
// if(true){
//     console.log(value);
// }
// var має Глобальну та Функціональну


// let value = 10;

// if (true) {
//     value = 15
// }

// console.log(value);



// let value = 10;

// if (true) {
//     let value = 15;
//     value = 22;
//     console.log('in',value);
// }

// // console.log('out',value);

// let value = 10;

// if(true){
//     value = 22;
//     let value = 10;
// }
// console.log(value);


// let value = 10;

// if (true) {
//     let value = 22;
//     if (true) {
//         value = 14;
//     }
// }
// console.log(value);


// let value = 10;

// if(true){
//     const value = 15;
//     if(true){
//         const b = 14;
//     }
//     value = 22;
// }
// console.log(b);
// if(true){
//      value = 15;
//     if(true){
//         const b = 14;
//     }
//     value = 22;
// }

// console.log(b);

// let value = 12;
// let test = 14
// if (true) {
//     value = 122;
//     if (true) {
//         let value = 15;
//         test = 127;
//     }
//     value = 1;
// }

// console.log(value);
// console.log(test);


// let value = 10;
// let test = 11;


// if (true) {
//     value = 1;
//     let test = 1;
//     if (true) {
//         test = 24
//         value = 35
//     }
// }
// console.log(value);
// console.log(test);


// let value = 10;
// let test = 11;

// if (true) {
//     value = 1
//     test = 12;
//     if (true) {
//         let value = 117;
//         let test = 118;
//         if (false) {
//             value = 9
//             test = 0
//         }
//         console.log(value);
//         console.log(test);
//     }

// }


//  i = i + 1
// for (let i = 1; i < 10; i += 1) {
//     console.log(i);
// }


// let i = 11;
// while (i < 10) { //=> false
//     console.log(i);
//     i += 1
// }


// do{
//     console.log(i);
//         i += 1
// }while(i < 10)



// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const response = prompt("Яка офіційна назва JavaScript?");
// const result = 'ECMAScript';
// // if (response === result) {
// //     alert("Правильно!")
// // } else {
// //     alert("Не знаєте? ECMAScript!")
// // }
// alert(response === result ? "Правильно!" : "Не знаєте? ECMAScript!")


// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if(minutes){
//     timestring = `${hours}г. ${minutes}хв`
// }else{
//     timestring = `${hours}г.`
// }
// console.log(timestring);






// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));
// if(!userInput){
//     console.log("Це нуль");
// }else if(userInput > 0){
//     console.log("Це позитивне число");
// }else {
//     console.log("Це негативне число");
// }



// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 180;
// const b = 180;
// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }




// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if(link.endsWith('/')){
//     console.log(link);
// }else{
//     link += '/';
//     console.log(link);
// }

// if (!link.endsWith('/')) {
//     link += '/';
// }
// console.log(link);

// console.log(link);




// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes("my-site")) {
//     link += '/'
// }
// console.log(link);



// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }                                                  //true       false  
// link = link.includes('my-site') && !link.endsWith('/') ? link += '/' : link;
// console.log(link);




// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 25;

// if(hours < 17){
//     console.log("Pending");
// }else if(hours >= 17 && hours <= 24){
//     console.log("Expires");
// }else{
//     console.log("Overdue");
// }




// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 5;



// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 1;


// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сьогодні');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Післязавтра');
//         break;
//     default:
//         console.log('Дата у майбутньому');
// }


// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }



// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 19;

// for (let i = min; i <= max; i += 1) {
//     if (!(i % 5)) { // i % 5 === 0
//         console.log(i);
//     }
//     // console.log(i);
// }


// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"

// let login = prompt("Please enter your login")
// if (login) {
//     login = login.toLowerCase();
//     if (login === 'admin') {
//         const password = prompt('Enter your password');
//         if (password === 'Я адмін') {
//             console.log('Доброго дня!');
//         } else {
//             console.log("Невірний пароль");
//         }
//     } else {
//         console.log("Я вас не знаю");
//     }
// } else {
//     console.log("Скасовано");
// }

         //  012345678910
const str = 'Hello world';

const result = str.slice(0,5);
console.log(result);