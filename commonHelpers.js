import{A as q,S as $,i as M}from"./assets/vendor-39ba868b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{new q(".accordion-container",{duration:300,showMultiple:!1,openOnInit:[0]}),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".ac").forEach(o=>{o!==e.closest(".ac")&&o.classList.contains("is-active")&&(o.classList.remove("is-active"),o.querySelector(".ac-panel").style.maxHeight=null)})})})});const u=[{id:1,title:"wallet webservice",mob_1x:"../img/img_projects/01_wallet/wallet_mob@1x.jpg",mob_2x:"../img/img_projects/01_wallet/wallet_mob@2x.jpg",tab_1x:"../img/img_projects/01_wallet/wallet_tab@1x.jpg",tab_2x:"../img/img_projects/01_wallet/wallet_tab@2x.jpg",desc_1x:"https://github.com/Nazarchona/project_team_04/blob/main/src/img/img_projects/01_wallet/wallet_desc%401x.jpg",desc_2x:"https://github.com/Nazarchona/project_team_04/blob/main/src/img/img_projects/01_wallet/wallet_desc%402x.jpg"},{id:2,title:"green harvest webservice",mob_1x:"../img/img_projects/02_green/green_mob@1x.jpg",mob_2x:"../img/img_projects/02_green/green_mob@2x.jpg",tab_1x:"../img/img_projects/02_green/green_tab@1x.jpg",tab_2x:"../img/img_projects/02_green/green_tab@2x.jpg",desc_1x:"../img/img_projects/02_green/green_desc@1x.jpg",desc_2x:"../img/img_projects/02_green/green_desc@2x.jpg"},{id:3,title:"English Exellence website",mob_1x:"../img/img_projects/03_english/english_mob@1x.jpg",mob_2x:"../img/img_projects/03_english/english_mob@2x.jpg",tab_1x:"../img/img_projects/03_english/english_tab@1x.jpg",tab_2x:"../img/img_projects/03_english/english_tab@2x.jpg",desc_1x:"../img/img_projects/03_english/english_desc@1x.jpg",desc_2x:"../img/img_projects/03_english/english_desc@2x.jpg"},{id:4,title:"power pulse webservice",mob_1x:"../img/img_projects/04_power/power_mob@1x.jpg",mob_2x:"../img/img_projects/04_power/power_mob@2x.jpg",tab_1x:"../img/img_projects/04_power/power_tab@1x.jpg",tab_2x:"../img/img_projects/04_power/power_tab@2x.jpg",desc_1x:"../img/img_projects/04_power/power_desc@1x.jpg",desc_2x:"../img/img_projects/04_power/power_desc@2x.jpg"},{id:5,title:"mimino website",mob_1x:"../img/img_projects/05_mimino/mimino_mob@1x.jpg",mob_2x:"../img/img_projects/05_mimino/mimino_mob@2x.jpg",tab_1x:"../img/img_projects/05_mimino/mimino_tab@1x.jpg",tab_2x:"../img/img_projects/05_mimino/mimino_tab@2x.jpg",desc_1x:"../img/img_projects/05_mimino/mimino_desc@1x.jpg",desc_2x:"../img/img_projects/05_mimino/mimino_desc@2x.jpg"},{id:6,title:"vyshyvanka vibes Landing Page",mob_1x:"../img/img_projects/06_vyshyvanka/vyshyvanka_mob@1x.jpg",mob_2x:"../img/img_projects/06_vyshyvanka/vyshyvanka_mob@2x.jpg",tab_1x:"../img/img_projects/06_vyshyvanka/vyshyvanka_tab@1x.jpg",tab_2x:"../img/img_projects/06_vyshyvanka/vyshyvanka_tab@2x.jpg",desc_1x:"../img/img_projects/06_vyshyvanka/vyshyvanka_desc@1x.jpg",desc_2x:"../img/img_projects/06_vyshyvanka/vyshyvanka_desc@2x.jpg"},{id:7,title:"chego jewelry website",mob_1x:"../img/img_projects/07_chego/chego_mob@1x.jpg",mob_2x:"../img/img_projects/07_chego/chego_mob@2x.jpg",tab_1x:"../img/img_projects/07_chego/chego_tab@1x.jpg",tab_2x:"../img/img_projects/07_chego/chego_tab@2x.jpg",desc_1x:"../img/img_projects/07_chego/chego_desc@1x.jpg",desc_2x:"../img/img_projects/07_chego/chego_desc@2x.jpg"},{id:8,title:"energy flow webservice",mob_1x:"../img/img_projects/08_energy/energy_mob@1x.jpg",mob_2x:"../img/img_projects/08_energy/energy_mob@2x.jpg",tab_1x:"../img/img_projects/08_energy/energy_tab@1x.jpg",tab_2x:"../img/img_projects/08_energy/energy_tab@2x.jpg",desc_1x:"../img/img_projects/08_energy/energy_desc@1x.jpg",desc_2x:"../img/img_projects/08_energy/energy_desc@2x.jpg"},{id:9,title:"fruitbox online store",mob_1x:"../img/img_projects/09_fruitbox/fruitbox_mob@1x.jpg",mob_2x:"../img/img_projects/09_fruitbox/fruitbox_mob@2x.jpg",tab_1x:"../img/img_projects/09_fruitbox/fruitbox_tab@1x.jpg",tab_2x:"../img/img_projects/09_fruitbox/fruitbox_tab@2x.jpg",desc_1x:"../img/img_projects/09_fruitbox/fruitbox_desc@1x.jpg",desc_2x:"../img/img_projects/09_fruitbox/fruitbox_desc@2x.jpg"},{id:10,title:"starlight studio landing page",mob_1x:"../img/img_projects/10_starlight/star_mob@1x.jpg",mob_2x:"../img/img_projects/10_starlight/star_mob@2x.jpg",tab_1x:"../img/img_projects/10_starlight/star_tab@1x.jpg",tab_2x:"../img/img_projects/10_starlight/star_tab@2x.jpg",desc_1x:"../img/img_projects/10_starlight/star_desc@1x.jpg",desc_2x:"../img/img_projects/10_starlight/star_desc@2x.jpg"}],B="React, JavaScript, Node JS, Git",N="https://github.com/Nazarchona/project_team_04",O=10;let c=1,g=3;const h=document.querySelector(".projects-list"),_=document.querySelector(".projects-load-btn"),l=document.querySelector(".projects-clear-btn");document.addEventListener("DOMContentLoaded",v);_.addEventListener("click",I);l.addEventListener("click",P);function v(){h.innerHTML=w(u,c,g),_.classList.remove("is-hidden"),c+=3,g+=3}function w(e,i,o){return e.filter(r=>r.id>=i&&r.id<=o).map(({id:r,title:t,mob_1x:s,mob_2x:n,tab_1x:E,tab_2x:k,desc_1x:d,desc_2x:S})=>`<li class='projects-list-item' id='${r}'>
          <div class='proj-wrap-img'>
            <picture class='proj-item-imgs'>
              <source 
                media='(min-width: 1280px)'
                srcset="${d} 1x, ${S} 2x"
              />
               <source 
                media='(min-width: 768px)'
                srcset="${E} 1x, ${k} 2x"
              />
               <source 
                media='(max-width: 767px)'
                srcset="${s} 1x, ${n} 2x"
              />
              <img
                class="proj-img"
                src="${d}"
                alt='${t}'
              />
            </picture>
          </div>
          <p class='proj-tech-stack'>${B}</p>
          <div class='proj-wrap-descr'>
            <h3 class='proj-descr-title'>${t}</h3>
            <a class='proj-descr-link' href='${N}' target="_blank">
              visit
              <svg class='proj-link-svg' width='24' height='24'>
                <use href="../img/svg/icons.svg#icon-Visit_arrow"></use>
              </svg>
            </a>
          </div>
        </li>`).join("")}function I(e){e.preventDefault(),h.insertAdjacentHTML("beforeend",w(u,c,g)),c+=3,g+=3,c>O&&(_.classList.add("is-hidden"),l.classList.remove("is-hidden"))}function P(e){e.preventDefault(),c=1,g=3,v(),l.classList.add("is-hidden")}const y=document.querySelector("#reviews-list"),x=document.querySelector("#prev"),j=document.querySelector("#next");let m,a=!0;async function z(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(e.status!=200)throw new Error("Failed to fetch reviews");const i=await e.json();return a=!0,i}catch(e){return M.error({title:"Error",message:"Sorry, something went wrong with reviews."}),e}}function f(){m=window.innerWidth<1280?1:2}function A(e){y.innerHTML=e.map(i=>`
    <li class="swiper-slide">
          <p class="main-text-with-opacity">${i.review}</p>
          <div class="swiper-user">
            <img
              src="${i.avatar_url}"
              alt="Reviewer"
              class="reviewer-image"
              width="40"
              height="40"
              loading="lazy"
            />
            <p class="reviewer-name">${i.author}</p>
          </div>
        </li>
    `).join("")}function H(){y.innerHTML='<p class="main-text-with-opacity error">Not Found</p>'}async function L(){try{const e=await z();A(e);const i=new $(".swiper",{navigation:{nextEl:j,prevEl:x},slidesPerView:m,slidesPerGroup:m,spaceBetween:32,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},autoHeight:!1,observer:!0,on:{slideChange:function(){const{isBeginning:o,isEnd:r}=i;x.disabled=o,j.disabled=r}}});a=!0}catch{H(),a=!1}}f();L();window.addEventListener("resize",function(){a&&(f(),L())});const D=document.querySelector(".mobile-open-btn"),T=document.querySelector(".mobile-menu-container"),R=document.querySelector(".mobile-menu-close-btn"),C=document.querySelector(".mobile-menu-nav-list");function p(){T.classList.toggle("is-open")}D.addEventListener("click",p);R.addEventListener("click",p);C.addEventListener("click",e=>{e.target.classList.contains("mobile-menu-nav-link")&&p()});document.getElementById("text-btn-hero");const b=document.getElementById("moveButton");b.addEventListener("click",()=>{b.classList.toggle("active")});
//# sourceMappingURL=commonHelpers.js.map
