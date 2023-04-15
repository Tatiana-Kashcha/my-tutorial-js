/**
 * ЗАДАЧА 3
 *
 * Якщо ємейл і пароль користувача співпадають, під час сабміта зберігай данні з форми
 * в локальне сховище і змінюй кнопку login на logout та роби поле введення
 * недоступним для змін.
 * При перезавантаженні сторінки, якщо користувач залогінився, ми маємо бачити logout-кнопку
 * та недоступні для змін поля з данними користувача.
 * Клік по кнопці logout повертає усе в первинний стан і видаляє данні користувача
 * з локального сховища.
 *
 * Якщо введені данні не співпадають з необхідними данними, викликати аlert та
 * повідомляти про помилку.
 */

const SAVED_LOGIN_DATA = 'SAVED_LOGIN_DATA';
const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const formEl = document.querySelector('#login-form');
const btn = document.querySelector("[name='button']");
const emailInput = document.querySelector("[type='email']");
const passwordInput = document.querySelector('[type="password"]');

// console.log(formEl.elements);

if (JSON.parse(localStorage.getItem(SAVED_LOGIN_DATA))) {
  emailInput.value = USER_DATA.email;
  passwordInput.value = USER_DATA.password;
  btn.textContent = 'logout';
  emailInput.disabled = true;
  passwordInput.disabled = true;
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (JSON.parse(localStorage.getItem(SAVED_LOGIN_DATA))) {
    e.target.reset();
    e.target.elements.email.disabled = false;
    e.target.elements.password.disabled = false;
    btn.textContent = 'login';
    localStorage.removeItem(SAVED_LOGIN_DATA);
  } else {
    const { email, password } = formEl.elements;

    if (email.value.trim() === USER_DATA.email && password.value.trim() === USER_DATA.password) {
      localStorage.setItem(SAVED_LOGIN_DATA, JSON.stringify(USER_DATA));

      btn.textContent = 'logout';
      e.target.reset();
      e.target.elements.email.disabled = true;
      e.target.elements.password.disabled = true;
    } else {
      alert('Data isn`t valid');
    }
  }
}
