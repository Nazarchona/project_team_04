import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0]
  });


  document.querySelectorAll('.ac-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const items = document.querySelectorAll('.ac');
      items.forEach(item => {
        if (item !== trigger.closest('.ac') && item.classList.contains('is-active')) {
          item.classList.remove('is-active');
          item.querySelector('.ac-panel').style.maxHeight = null;
        }
      });
    });
  });
});
