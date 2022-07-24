const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit)
const LOCALSTORAGE_KEY = "feedback-form-state";
let LOCALSTORAGE_DATA = {};


fillForm();

function fillForm(){
    try {
        feedbackForm.elements.message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
        feedbackForm.elements.email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
        
    } catch (error) {
        console.log('LOCALSTORAGE is empty');
    }
}

function onFormInput(evt) {
    LOCALSTORAGE_DATA.message = feedbackForm.elements.message.value;
    LOCALSTORAGE_DATA.email = feedbackForm.elements.email.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(LOCALSTORAGE_DATA));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(LOCALSTORAGE_DATA);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackForm.reset();
}
