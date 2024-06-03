import{A as S,S as $,i as q}from"./assets/vendor-39ba868b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{new S(".accordion-container",{duration:300,showMultiple:!1,openOnInit:[0]}),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".ac").forEach(r=>{r!==e.closest(".ac")&&r.classList.contains("is-active")&&(r.classList.remove("is-active"),r.querySelector(".ac-panel").style.maxHeight=null)})})})});const b=[{id:1,title:"wallet webservice",mob_1x:"/src/img/img_projects/01_wallet/wallet_mob@1x.jpg",mob_2x:"/src/img/img_projects/01_wallet/wallet_mob@2x.jpg",tab_1x:"/src/img/img_projects/01_wallet/wallet_tab@1x.jpg",tab_2x:"/src/img/img_projects/01_wallet/wallet_tab@2x.jpg",desc_1x:"/src/img/img_projects/01_wallet/wallet_desc@1x.jpg",desc_2x:"/src/img/img_projects/01_wallet/wallet_desc@2x.jpg"},{id:2,title:"green harvest webservice",mob_1x:"/src/img/img_projects/02_green/green_mob@1x.jpg",mob_2x:"/src/img/img_projects/02_green/green_mob@2x.jpg",tab_1x:"/src/img/img_projects/02_green/green_tab@1x.jpg",tab_2x:"/src/img/img_projects/02_green/green_tab@2x.jpg",desc_1x:"/src/img/img_projects/02_green/green_desc@1x.jpg",desc_2x:"/src/img/img_projects/02_green/green_desc@2x.jpg"},{id:3,title:"English Exellence website",mob_1x:"/src/img/img_projects/03_english/english_mob@1x.jpg",mob_2x:"/src/img/img_projects/03_english/english_mob@2x.jpg",tab_1x:"/src/img/img_projects/03_english/english_tab@1x.jpg",tab_2x:"/src/img/img_projects/03_english/english_tab@2x.jpg",desc_1x:"/src/img/img_projects/03_english/english_desc@1x.jpg",desc_2x:"/src/img/img_projects/03_english/english_desc@2x.jpg"},{id:4,title:"power pulse webservice",mob_1x:"/src/img/img_projects/04_power/power_mob@1x.jpg",mob_2x:"/src/img/img_projects/04_power/power_mob@2x.jpg",tab_1x:"/src/img/img_projects/04_power/power_tab@1x.jpg",tab_2x:"/src/img/img_projects/04_power/power_tab@2x.jpg",desc_1x:"/src/img/img_projects/04_power/power_desc@1x.jpg",desc_2x:"/src/img/img_projects/04_power/power_desc@2x.jpg"},{id:5,title:"mimino website",mob_1x:"/src/img/img_projects/05_mimino/mimino_mob@1x.jpg",mob_2x:"/src/img/img_projects/05_mimino/mimino_mob@2x.jpg",tab_1x:"/src/img/img_projects/05_mimino/mimino_tab@1x.jpg",tab_2x:"/src/img/img_projects/05_mimino/mimino_tab@2x.jpg",desc_1x:"/src/img/img_projects/05_mimino/mimino_desc@1x.jpg",desc_2x:"/src/img/img_projects/05_mimino/mimino_desc@2x.jpg"},{id:6,title:"vyshyvanka vibes Landing Page",mob_1x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_mob@1x.jpg",mob_2x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_mob@2x.jpg",tab_1x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_tab@1x.jpg",tab_2x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_tab@2x.jpg",desc_1x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_desc@1x.jpg",desc_2x:"/src/img/img_projects/06_vyshyvanka/vyshyvanka_desc@2x.jpg"},{id:7,title:"chego jewelry website",mob_1x:"/src/img/img_projects/07_chego/chego_mob@1x.jpg",mob_2x:"/src/img/img_projects/07_chego/chego_mob@2x.jpg",tab_1x:"/src/img/img_projects/07_chego/chego_tab@1x.jpg",tab_2x:"/src/img/img_projects/07_chego/chego_tab@2x.jpg",desc_1x:"/src/img/img_projects/07_chego/chego_desc@1x.jpg",desc_2x:"/src/img/img_projects/07_chego/chego_desc@2x.jpg"},{id:8,title:"energy flow webservice",mob_1x:"/src/img/img_projects/08_energy/energy_mob@1x.jpg",mob_2x:"/src/img/img_projects/08_energy/energy_mob@2x.jpg",tab_1x:"/src/img/img_projects/08_energy/energy_tab@1x.jpg",tab_2x:"/src/img/img_projects/08_energy/energy_tab@2x.jpg",desc_1x:"/src/img/img_projects/08_energy/energy_desc@1x.jpg",desc_2x:"/src/img/img_projects/08_energy/energy_desc@2x.jpg"},{id:9,title:"fruitbox online store",mob_1x:"/src/img/img_projects/09_fruitbox/fruitbox_mob@1x.jpg",mob_2x:"/src/img/img_projects/09_fruitbox/fruitbox_mob@2x.jpg",tab_1x:"/src/img/img_projects/09_fruitbox/fruitbox_tab@1x.jpg",tab_2x:"/src/img/img_projects/09_fruitbox/fruitbox_tab@2x.jpg",desc_1x:"/src/img/img_projects/09_fruitbox/fruitbox_desc@1x.jpg",desc_2x:"/src/img/img_projects/09_fruitbox/fruitbox_desc@2x.jpg"},{id:10,title:"starlight studio landing page",mob_1x:"/src/img/img_projects/10_starlight/star_mob@1x.jpg",mob_2x:"/src/img/img_projects/10_starlight/star_mob@2x.jpg",tab_1x:"/src/img/img_projects/10_starlight/star_tab@1x.jpg",tab_2x:"/src/img/img_projects/10_starlight/star_tab@2x.jpg",desc_1x:"/src/img/img_projects/10_starlight/star_desc@1x.jpg",desc_2x:"/src/img/img_projects/10_starlight/star_desc@2x.jpg"}],M="React, JavaScript, Node JS, Git",O="https://github.com/Nazarchona/project_team_04",B=10;let o=1,n=3;const u=document.querySelector(".projects-list"),_=document.querySelector(".projects-load-btn"),p=document.querySelector(".projects-clear-btn");document.addEventListener("DOMContentLoaded",h);_.addEventListener("click",I);p.addEventListener("click",P);function h(){u.innerHTML=w(b,o,n),_.classList.remove("is-hidden"),o+=3,n+=3}function w(e,s,r){return e.filter(c=>c.id>=s&&c.id<=r).map(({id:c,title:t,mob_1x:i,mob_2x:g,tab_1x:L,tab_2x:k,desc_1x:l,desc_2x:E})=>`<li class='projects-list-item' id='${c}'>
          <div class='proj-wrap-img'>
            <picture class='proj-item-imgs'>
              <source 
                media='(min-width: 1280px)'
                srcset='${l} 1x, ${E} 2x'
              />
               <source 
                media='(min-width: 768px)'
                srcset='${L} 1x, ${k} 2x'
              />
               <source 
                media='(max-width: 767px)'
                srcset='${i} 1x, ${g} 2x'
              />
              <img
                class="proj-img"
                src='${l}'
                alt='${t}'
              />
            </picture>
          </div>
          <p class='proj-tech-stack'>${M}</p>
          <div class='proj-wrap-descr'>
            <h3 class='proj-descr-title'>${t}</h3>
            <a class='proj-descr-link' href='${O}' target="_blank">
              visit
              <svg class='proj-link-svg' width='24' height='24'>
                <use href='/src/img/svg/icons.svg#icon-Visit_arrow'></use>
              </svg>
            </a>
          </div>
        </li>`)}function I(e){e.preventDefault(),u.insertAdjacentHTML("beforeend",w(b,o,n)),o+=3,n+=3,o>B&&(_.classList.add("is-hidden"),p.classList.remove("is-hidden"))}function P(e){e.preventDefault(),o=1,n=3,h(),p.classList.add("is-hidden")}const v=document.querySelector("#reviews-list"),d=document.querySelector("#prev"),x=document.querySelector("#next");let a,m=!0;async function N(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(e.status!=200)throw new Error("Failed to fetch reviews");const s=await e.json();return m=!0,s}catch(e){return q.error({title:"Error",message:"Sorry, something went wrong with reviews."}),e}}function y(){a=window.innerWidth<1280?1:2}function A(e){v.innerHTML=e.map(s=>`
    <li class="swiper-slide">
          <p class="main-text-with-opacity">${s.review}</p>
          <div class="swiper-user">
            <img
              src="${s.avatar_url}"
              alt="Reviewer"
              class="reviewer-image"
              width="40"
              height="40"
              loading="lazy"
            />
            <p class="reviewer-name">${s.author}</p>
          </div>
        </li>
    `).join("")}function H(){v.innerHTML='<p class="main-text-with-opacity error">Not Found</p>'}async function f(){try{const e=await N();A(e);const s=new $(".swiper",{navigation:{nextEl:x,prevEl:d},slidesPerView:a,slidesPerGroup:a,spaceBetween:32,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},autoHeight:!1,observer:!0,on:{slideChange:function(){const{isBeginning:r,isEnd:c}=s;d.disabled=r,x.disabled=c}}});m=!0}catch{H(),m=!1}}y();f();window.addEventListener("resize",function(){m&&(y(),f())});document.getElementById("text-btn-hero");const j=document.getElementById("moveButton");j.addEventListener("click",()=>{j.classList.toggle("active")});
//# sourceMappingURL=commonHelpers.js.map
