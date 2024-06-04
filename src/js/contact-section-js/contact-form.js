import axios from 'axios';
import { showModal, hideModal } from './modal-toggle';

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const userEmail = emailInput.value;
  const userMessage = messageInput.value;

  if (!emailInput.checkValidity()) {
    event.preventDefault();
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }

  if (!userEmail.trim()) {
    alert('please fill in the email field.');
    return;
  }

  const requestData = { email: userEmail };
  if (userMessage) {
    requestData.comment = userMessage;
  }

  try {
    const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', requestData);
    if (response.status === 201) {
      showModal();
    } else {
      alert('There was an error processing your request. Please try again later.');
    }
  } catch (error) {
    console.error(error);
  }
});

emailInput.addEventListener('input', function () {
  emailInput.classList.remove('invalid');
});

const closeModalButton = document.querySelector('.modal-close-icon');
closeModalButton.addEventListener('click', hideModal);
