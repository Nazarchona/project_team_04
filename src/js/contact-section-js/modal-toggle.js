export function showModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.querySelector('body');

  body.classList.add('no-scroll');
  overlay.classList.add('is-open');
}

export function hideModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.querySelector('body');

  body.classList.remove('no-scroll');
  overlay.classList.remove('is-open');
}
