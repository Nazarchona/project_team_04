import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewsList = document.querySelector('#reviews-list');
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');

let quantitySlides;
let flag = true;

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (response.status != 200) {
      throw new Error('Failed to fetch reviews');
    }

    const reviews = await response.json();
    flag = true;
    return reviews;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, something went wrong with reviews.',
    });
    return error;
  }
}

function setQSlides() {
  const windowWidth = window.innerWidth;
  quantitySlides = windowWidth < 1280 ? 1 : 2;
}

function fillList(reviews) {
  reviewsList.innerHTML = reviews
    .map(
      review => `
    <li class="swiper-slide">
          <p class="main-text-with-opacity">${review.review}</p>
          <div class="swiper-user">
            <img
              src="${review.avatar_url}"
              alt="Reviewer"
              class="reviewer-image"
              width="40"
              height="40"
              loading="lazy"
            />
            <p class="reviewer-name">${review.author}</p>
          </div>
        </li>
    `
    )
    .join('');
}

function errorList() {
  reviewsList.innerHTML =
    '<p class="main-text-with-opacity error">Not Found</p>';
}

async function loadReviews() {
  try {
    const reviews = await fetchReviews();
    fillList(reviews);
    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: quantitySlides,
      slidesPerGroup: quantitySlides,
      spaceBetween: 32,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel: {
        sensitivity: 1,
      },

      autoHeight: false,
      observer: true,
      on: {
        slideChange: function () {
          const { isBeginning, isEnd } = swiper;
          buttonPrev.disabled = isBeginning;
          buttonNext.disabled = isEnd;
        },
      },
    });

    flag = true;
  } catch {
    errorList();
    flag = false;
  }
}

setQSlides();
loadReviews();

window.addEventListener('resize', function () {
  if (flag) {
    setQSlides();
    loadReviews();
  }
});
