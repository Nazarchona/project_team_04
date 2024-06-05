import axios from 'axios';
import { showModal, hideModal } from './modal-toggle';

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailWrapper = emailInput.parentElement;
const messageInput = document.getElementById('message');

const validateEmail = () => {
  const userEmail = emailInput.value;

  if (
    !userEmail ||
    !userEmail.includes('@') ||
    userEmail.indexOf('@') === userEmail.length - 1
  ) {
    emailWrapper.classList.add('invalid');
    return false;
  } else {
    emailWrapper.classList.remove('invalid');
    return true;
  }
};

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  if (!validateEmail()) {
    return;
  }

  const userEmail = emailInput.value.replace(/\s+/g, '');
  const userMessage = messageInput.value;

  const requestData = { email: userEmail };
  if (userMessage) {
    requestData.comment = userMessage;
  }

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      requestData
    );
    if (response.status === 201) {
      showModal();
      form.reset();
    } else {
      alert(
        'There was an error processing your request. Please try again later.'
      );
    }
  } catch (error) {
    console.error(error);
  }
});

emailInput.addEventListener('input', function () {
  emailWrapper.classList.remove('invalid');
});

emailInput.addEventListener('focus', function () {
  emailWrapper.classList.remove('invalid');
});

emailInput.addEventListener('blur', function () {
  validateEmail();
});

const closeModalButton = document.querySelector('.modal-close-icon');
closeModalButton.addEventListener('click', hideModal);
