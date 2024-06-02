const modalOpenBtn = document.getElementById('openModalBtn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-countainer');

// Відкриття модального вікна
modalOpenBtn.addEventListener('click', event => {
  event.preventDefault();
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden'; // Блокування скролу
});

// Закриття модального вікна при натисканні на кнопку
modalCloseBtn.addEventListener('click', event => {
  event.preventDefault();
  modal.classList.add('is-hidden');
  document.body.style.overflow = ''; // Відновлення скролу
});

// Закриття модального вікна при натисканні Esc
document.addEventListener('keyup', event => {
  if (event.key === 'Escape') {
    modal.classList.add('is-hidden');
    document.body.style.overflow = ''; // Відновлення скролу
  }
});

// Закриття модального вікна при натисканні за межами вікна
document.addEventListener('click', event => {
  if (event.target !== modalOpenBtn) {
    modal.classList.add('is-hidden');
    document.body.style.overflow = ''; // Відновлення скролу
  }
});
