export function showModal() {
  const overlay = document.getElementById('modal-overlay');
  const noScroll = document.querySelector('html');

  noScroll.classList.add('no-scroll');
  overlay.classList.add('is-open');
}

export function hideModal() {
  const overlay = document.getElementById('modal-overlay');
  const noScroll = document.querySelector('html');

  noScroll.classList.remove('no-scroll');
  overlay.classList.remove('is-open');
}
