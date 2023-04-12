// import { sum } from './02-video';
// console.log(sum(5,5));

//-----03 form-----old-----
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

// inputEmail.addEventListener('input', throttle(onEmailInput, 500));
// textareaMessage.addEventListener('input', throttle(onTextareaInput, 500));

notEmptyForm();
// notEmptyEmail();
// notEmptyTextarea();

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    console.log('Please fill in all the fields!');
    return;
  }
  const user = { email: email.value, message: message.value };

  console.log(user);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const formDataStorage = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataStorage);

  console.log(formData);
  console.log(formDataStorage);
}

function notEmptyForm() {
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (savedValue) {
    console.log(savedValue);
    const setValueForm = JSON.parse(savedValue);
    formData = { email: setValueForm.email, message: setValueForm.message };
    console.log(setValueForm);

    if (setValueForm.email) {
      inputEmail.value = setValueForm.email;
    } else {
      inputEmail.value = '';
    }

    if (setValueForm.message) {
      textareaMessage.value = setValueForm.message;
    } else {
      textareaMessage.value = '';
    }
    console.log(setValueForm.email);
    console.log(setValueForm.message);
  }
}

// function notEmptyTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     console.log(savedMessage);
//     textareaMessage.value = savedMessage;
//     console.log(textareaMessage.value);
//   }
// }

// function onTextareaInput(evt) {
//   const messageText = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, messageText);
// }

// function onEmailInput(evt) {
//   const inputText = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, inputText);
// }

// function notEmptyEmail() {
//   const savedEmail = localStorage.getItem(STORAGE_KEY);
//   if (savedEmail) {
//     console.log(savedEmail);
//     inputEmail.value = savedEmail;
//     console.log(inputEmail.value);
//   }
// }
