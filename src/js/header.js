(() => {
    const mobileMenu = document.querySelector('.mobile-menu-container');
    const openMenuBtn = document.querySelector('.mobile-open-btn');
    const closeMenuBtn = document.querySelector('.mobile-menu-close-btn');
    const menuLinks = document.querySelectorAll('.mobile-menu-nav-link');
    const orderProjectBtn = document.querySelector('.mobile-order-project-btn');
  
    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      if (!isMenuOpen) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = ''; 
      }
    };
  
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', toggleMenu);
    });
  
    orderProjectBtn.addEventListener('click', toggleMenu);
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      document.body.style.overflow = ''; 
    });
  })();
