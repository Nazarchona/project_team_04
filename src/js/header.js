const menuBtnEl = document.querySelector('.mobile-open-btn');
const menuBackdrop = document.querySelector('.mobile-menu-container');
const closeModalBtnEl = document.querySelector('.mobile-menu-close-btn');
const navigationListEl = document.querySelector('.mobile-menu-nav-list');

function toggleModal() {
  menuBackdrop.classList.toggle('is-open');
}

menuBtnEl.addEventListener('click', toggleModal);
closeModalBtnEl.addEventListener('click', toggleModal);

navigationListEl.addEventListener('click', (event) => {
  if (event.target.classList.contains('mobile-menu-nav-link')) {
    toggleModal();
  }
});