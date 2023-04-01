// /1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

/* const message = 'ECMAScript';
const messageUser = prompt('What is the official name of JavaScript?');

// if (message === messageUser) {
//   alert('True!');
// } else {alert("Don't you know? ECMAScript!")};

const text = message === messageUser ? 'True!' : "Don't you know? ECMAScript!";

alert(text);
 */

//2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// let time = prompt("Enter the number of minutes to format");
// if (!time) {
//   alert("Ви не ввели дані");
// } else {
//   let hours = Math.floor(time / 60)
//     .toString()
//     .padStart(2, 0);
//   let minutes = (time % 60).toString().padStart(2, 0);
//   alert(`${hours}:${minutes}`);
// }

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const min = 1;
// const max = 8;

// for (let index = max; index >= min; index-=1) {

//     if (index % 2 === 0) {
//         console.log(index);
//    }
// }

//4. Напишіть код, який буде запитувати логін за допомогою prompt "Hello,
// please enter your login!" і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок
// "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль
// (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const login = prompt("Hello, please enter your login!");
// const password = "adminPassword";
// let message = "";

// if (login === null) {
//   message = "Authorization has been cancelled";
// } else if (login === "admin") {
//   const checkpassword = prompt("Please enter your password");
//   if (checkpassword === password) {
//     message = "Hello!";
//   } else if (checkpassword === null) {
//     message = "Authorization has been cancelled";
//   } else {
//     message = "Goodbye!";
//   }
// } else {
//   message = "Goodbye!";
// }

// switch (login) {
//   case null:
//     message = "Authorization has been cancelled";
//     break;
//   case "admin":
//     const checkpassword = prompt("Please enter your password");
//     switch (checkpassword) {
//       case password:
//         message = "Hello!";
//         break;

//       case null:
//         message = "Authorization has been cancelled";
//         break;

//       default:
//         message = "Goodbye!";
//     }
//     break;

//   default:
//     message = "Goodbye!";
//     break;
// }

// alert(message);

// ----------------------------1 домашка--------------------------------------

//6. При завантаженні сторінки користувачу у prompt пропонується ввести
// число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не
// натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel,
// показати alert з рядком "The total sum of the entered numbers is [total]."
//Робити перевірку, що користувач ввів саме число, а не довільний рядок не
// потрібно.

// let total = 0;
// while (true) {
//    let enterNumber = Number(prompt('Hello, enter please the number'));
//     if (enterNumber) {
//       total += enterNumber;
//     } else {
//       break;
//     }
// }
// alert(`The total sum of the entered numbers is ${total}.`);

//7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.'
// та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести
// 'Goodbye'.

// while (true) {
//   let enterNumber = prompt('Hello, enter please the number greater then 100.');
//   if (enterNumber === null) {
//       alert(`Goodbye`);
//       break;
//   } else if (enterNumber <= 100) {
//       alert(`Enter please the number greater then 100`);
//   } else {
//       alert(`${enterNumber}`);
//       break;
//   }
// }

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число
// від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59).
// Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у
// консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// let enterNumber = prompt('Hello, enter please the number between  0 and 59');
// let message = '';

// if (enterNumber === null) {
//   message = 'Goodbye!';
// } else if (enterNumber < 0 || enterNumber > 59) {
//   alert(`The ${enterNumber} is outside 0 and 59`);
// } else if (enterNumber === 0 || enterNumber <= 15) {
//   message = `Number ${enterNumber} refers to 1 quarters`;
// } else if (enterNumber === 16 || enterNumber <= 30) {
//   message = `Number ${enterNumber} refers to 2 quarters`;
// } else if (enterNumber === 31 || enterNumber <= 45) {
//   message = `Number ${enterNumber} refers to 3 quarters`;
// } else {
//   message = `Number ${enterNumber} refers to 4 quarters`;
// }
// console.log(message);

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// const text = 'a1abcde';
// let message = '';
// text[0] === 'a' ? (message = 'yes') : (message = 'no');
// console.log(message);

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та
//  повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

// function fillArray(arrLength, arrElement) {
//     const arr = [];
//     for (let i = 0; i < arrLength; i+=1) {
//         arr.push(arrElement);
//     }
//     console.log(arr);
// }
// fillArray(3, 'a')

// 11. Написати функцію, яка буде видаляти з масива усі значення, які приводяться
// до false
// undefined, null, false, '', 0, NaN

// -----Варіант рішення 1 ------------------------------------------------

// function cleanArray(arr) {
// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (!arr[i]) {
//     arr.splice(i, 1);
//   }
// }
//   console.log(arr);
// }
// cleanArray([1, undefined, 2, null, 3, false, 4, '', 5, 0, 6, NaN]);
// cleanArray([12, undefined, 22, null, 33, false, 44, '', 55, 0, 66, NaN]);

// ------Варіант рішення 2 ----------------------------------------------

// const arrValues = [undefined, null, false, '', 0, NaN];

// function cleanArray(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (arrValues.includes(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
//   console.log(arr);
// }
// cleanArray([1, undefined, 2, null, 3, false, 4, '', 5, 0, 6, NaN]);
// cleanArray([12, undefined, 22, null, 33, false, 44, '', 55, 0, 66, NaN]);

//----------------від Олексія-----
function arrWithoutFalseElements(array, falseArray) {
  for (let i = 0; i < array.length; i += 1) {
    const commonElement = falseArray.includes(array[i]);

    if (commonElement) {
      array.splice(i, 1);
      i -= 1;
    }
  }

  return array;
}

console.log(
  arrWithoutFalseElements(
    [10, '', 20, false, 0, 37, null, 12, undefined, 54, false, '', 0, NaN, 40],
    [false, undefined, null, false, '', 0, NaN]
  )
);
