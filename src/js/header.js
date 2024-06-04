document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.mobile-open-btn');
  const closeBtn = document.querySelector('.mobile-menu-close-btn');
  const mobileMenuContainer = document.querySelector('.mobile-menu-container');
  const menuLinks = document.querySelectorAll('.mobile-menu-nav-link');

  function openMobileMenu() {
    mobileMenuContainer.classList.remove('close');
    mobileMenuContainer.classList.add('open');
  }

  // Закриття мобільного меню
  function closeMobileMenu() {
    mobileMenuContainer.classList.remove('open');
    mobileMenuContainer.classList.add('close');
  }

  // Обробники подій для кнопок
  openBtn.addEventListener('click', openMobileMenu);
  closeBtn.addEventListener('click', closeMobileMenu);

  // Обробники подій для посилань у меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
});

