const imagesWalletPaths = import.meta.glob(
  './img/img_projects/01_wallet//*.jpg'
);
const imagesGreenPaths = import.meta.glob('./img/img_projects/02_green//*.jpg');
const imagesEnglishPaths = import.meta.glob(
  './img/img_projects/03_english//*.jpg'
);
const imagesPowerPaths = import.meta.glob('./img/img_projects/04_power//*.jpg');
const imagesMiminoPaths = import.meta.glob(
  './img/img_projects/05_mimino//*.jpg'
);
const imagesVyshyvankaPaths = import.meta.glob(
  './img/img_projects/06_vyshyvanka//*.jpg'
);
const imagesChegoPaths = import.meta.glob('./img/img_projects/07_chego//*.jpg');
const imagesEnergyPaths = import.meta.glob(
  './img/img_projects/08_energy//*.jpg'
);
const imagesFruitboxPaths = import.meta.glob(
  './img/img_projects/09_fruitbox//*.jpg'
);
const imagesStarlightPaths = import.meta.glob(
  './img/img_projects/10_starlight//*.jpg'
);

const iconsPaths = import.meta.glob('../img/svg//*.svg');

const images = [
  {
    id: 1,
    title: 'wallet webservice',
    mob_1x: './img/img_projects/01_wallet/wallet_mob@1x.jpg',
    mob_2x: './img/img_projects/01_wallet/wallet_mob@2x.jpg',
    tab_1x: './img/img_projects/01_wallet/wallet_tab@1x.jpg',
    tab_2x: './img/img_projects/01_wallet/wallet_tab@2x.jpg',
    desc_1x: './img/img_projects/01_wallet/wallet_desc@1x.jpg',
    desc_2x: './img/img_projects/01_wallet/wallet_desc@2x.jpg',
  },
  {
    id: 2,
    title: 'green harvest webservice',
    mob_1x: './img/img_projects/02_green/green_mob@1x.jpg',
    mob_2x: './img/img_projects/02_green/green_mob@2x.jpg',
    tab_1x: './img/img_projects/02_green/green_tab@1x.jpg',
    tab_2x: './img/img_projects/02_green/green_tab@2x.jpg',
    desc_1x: './img/img_projects/02_green/green_desc@1x.jpg',
    desc_2x: './img/img_projects/02_green/green_desc@2x.jpg',
  },
  {
    id: 3,
    title: 'English Exellence website',
    mob_1x: './img/img_projects/03_english/english_mob@1x.jpg',
    mob_2x: './img/img_projects/03_english/english_mob@2x.jpg',
    tab_1x: './img/img_projects/03_english/english_tab@1x.jpg',
    tab_2x: './img/img_projects/03_english/english_tab@2x.jpg',
    desc_1x: './img/img_projects/03_english/english_desc@1x.jpg',
    desc_2x: './img/img_projects/03_english/english_desc@2x.jpg',
  },
  {
    id: 4,
    title: 'power pulse webservice',
    mob_1x: './img/img_projects/04_power/power_mob@1x.jpg',
    mob_2x: './img/img_projects/04_power/power_mob@2x.jpg',
    tab_1x: './img/img_projects/04_power/power_tab@1x.jpg',
    tab_2x: './img/img_projects/04_power/power_tab@2x.jpg',
    desc_1x: './img/img_projects/04_power/power_desc@1x.jpg',
    desc_2x: './img/img_projects/04_power/power_desc@2x.jpg',
  },
  {
    id: 5,
    title: 'mimino website',
    mob_1x: './img/img_projects/05_mimino/mimino_mob@1x.jpg',
    mob_2x: './img/img_projects/05_mimino/mimino_mob@2x.jpg',
    tab_1x: './img/img_projects/05_mimino/mimino_tab@1x.jpg',
    tab_2x: './img/img_projects/05_mimino/mimino_tab@2x.jpg',
    desc_1x: './img/img_projects/05_mimino/mimino_desc@1x.jpg',
    desc_2x: './img/img_projects/05_mimino/mimino_desc@2x.jpg',
  },
  {
    id: 6,
    title: 'vyshyvanka vibes Landing Page',
    mob_1x: './img/img_projects/06_vyshyvanka/vyshyvanka_mob@1x.jpg',
    mob_2x: './img/img_projects/06_vyshyvanka/vyshyvanka_mob@2x.jpg',
    tab_1x: './img/img_projects/06_vyshyvanka/vyshyvanka_tab@1x.jpg',
    tab_2x: './img/img_projects/06_vyshyvanka/vyshyvanka_tab@2x.jpg',
    desc_1x: './img/img_projects/06_vyshyvanka/vyshyvanka_desc@1x.jpg',
    desc_2x: './img/img_projects/06_vyshyvanka/vyshyvanka_desc@2x.jpg',
  },
  {
    id: 7,
    title: 'chego jewelry website',
    mob_1x: './img/img_projects/07_chego/chego_mob@1x.jpg',
    mob_2x: './img/img_projects/07_chego/chego_mob@2x.jpg',
    tab_1x: './img/img_projects/07_chego/chego_tab@1x.jpg',
    tab_2x: './img/img_projects/07_chego/chego_tab@2x.jpg',
    desc_1x: './img/img_projects/07_chego/chego_desc@1x.jpg',
    desc_2x: './img/img_projects/07_chego/chego_desc@2x.jpg',
  },
  {
    id: 8,
    title: 'energy flow webservice',
    mob_1x: './img/img_projects/08_energy/energy_mob@1x.jpg',
    mob_2x: './img/img_projects/08_energy/energy_mob@2x.jpg',
    tab_1x: './img/img_projects/08_energy/energy_tab@1x.jpg',
    tab_2x: './img/img_projects/08_energy/energy_tab@2x.jpg',
    desc_1x: './img/img_projects/08_energy/energy_desc@1x.jpg',
    desc_2x: './img/img_projects/08_energy/energy_desc@2x.jpg',
  },
  {
    id: 9,
    title: 'fruitbox online store',
    mob_1x: './img/img_projects/09_fruitbox/fruitbox_mob@1x.jpg',
    mob_2x: './img/img_projects/09_fruitbox/fruitbox_mob@2x.jpg',
    tab_1x: './img/img_projects/09_fruitbox/fruitbox_tab@1x.jpg',
    tab_2x: './img/img_projects/09_fruitbox/fruitbox_tab@2x.jpg',
    desc_1x: './img/img_projects/09_fruitbox/fruitbox_desc@1x.jpg',
    desc_2x: './img/img_projects/09_fruitbox/fruitbox_desc@2x.jpg',
  },
  {
    id: 10,
    title: 'starlight studio landing page',
    mob_1x: './img/img_projects/10_starlight/star_mob@1x.jpg',
    mob_2x: './img/img_projects/10_starlight/star_mob@2x.jpg',
    tab_1x: './img/img_projects/10_starlight/star_tab@1x.jpg',
    tab_2x: './img/img_projects/10_starlight/star_tab@2x.jpg',
    desc_1x: './img/img_projects/10_starlight/star_desc@1x.jpg',
    desc_2x: './img/img_projects/10_starlight/star_desc@2x.jpg',
  },
];

const techStack = 'React, JavaScript, Node JS, Git';
const projectLink = `https://github.com/Nazarchona/project_team_04`;
const totalItem = 10;
let minId = 1;
let maxId = 3;

const list = document.querySelector('.projects-list');
const loadBtn = document.querySelector('.projects-load-btn');
const clearBtn = document.querySelector('.projects-clear-btn');

document.addEventListener('DOMContentLoaded', renderMarkup);
loadBtn.addEventListener('click', addElements);
clearBtn.addEventListener('click', clearElements);

function renderMarkup() {
  list.innerHTML = createMarkup(images, minId, maxId);
  loadBtn.classList.remove('is-hidden');
  minId += 3;
  maxId += 3;
}

function createMarkup(images, minId, maxId) {
  return images
    .filter(item => item.id >= minId && item.id <= maxId)
    .map(
      ({ id, title, mob_1x, mob_2x, tab_1x, tab_2x, desc_1x, desc_2x }) =>
        `<li class='projects-list-item' id='${id}'>
          <div class='proj-wrap-img'>
            <picture class='proj-item-imgs'>
              <source 
                media='(min-width: 1280px)'
                srcset="${desc_1x} 1x, ${desc_2x} 2x"
              />
               <source 
                media='(min-width: 768px)'
                srcset="${tab_1x} 1x, ${tab_2x} 2x"
              />
               <source 
                media='(max-width: 767px)'
                srcset="${mob_1x} 1x, ${mob_2x} 2x"
              />
              <img
                class="proj-img"
                src="${desc_1x}"
                alt='${title}'
              />
            </picture>
          </div>
          <p class='proj-tech-stack'>${techStack}</p>
          <div class='proj-wrap-descr'>
            <h3 class='proj-descr-title'>${title}</h3>
            <a class='proj-descr-link' href='${projectLink}' target="_blank">
              visit
              <svg class='proj-link-svg' width='24' height='24'>
                <use href="./img/svg/icons.svg#icon-Visit_arrow"></use>
              </svg>
            </a>
          </div>
        </li>`
    )
    .join('');
}

function addElements(event) {
  event.preventDefault();
  list.insertAdjacentHTML('beforeend', createMarkup(images, minId, maxId));
  minId += 3;
  maxId += 3;
  if (minId > totalItem) {
    loadBtn.classList.add('is-hidden');
    clearBtn.classList.remove('is-hidden');
  }
}

function clearElements(event) {
  event.preventDefault();
  minId = 1;
  maxId = 3;
  renderMarkup();
  clearBtn.classList.add('is-hidden');
}
