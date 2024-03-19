import{a as m,S as f,N as y,K as h,A as E}from"./assets/vendor-99dd5705.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const w=document.querySelector(".menu-open"),v=document.querySelector(".menu-close"),L=document.querySelector(".mobile-menu"),k=document.querySelector(".header-order"),q=document.querySelector(".header-nav__menu"),b=document.querySelector(".header-list"),x=document.querySelector(".mobile-btn");function B(){w.classList.add("is-hidden"),v.classList.remove("is-hidden"),L.classList.add("is-open")}function g(){L.classList.remove("is-open"),w.classList.remove("is-hidden"),v.classList.add("is-hidden"),k.style.display="none"}w.addEventListener("click",B);v.addEventListener("click",g);q.addEventListener("click",e=>{b.classList.toggle("is-hidden"),b.style.opacity=1});x.addEventListener("click",e=>{g()});document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(s){s.preventDefault(),g(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});m.defaults.baseURL="https://portfolio-js.b.goit.study/api";const S=document.querySelector(".reviews-wrapper");document.querySelector(".reviews-swiper");async function P(){try{return(await m.get("/reviews")).data}catch{return S.insertAdjacentHTML("afterbegin","<p class='review-error'>Not found</p>"),null}}async function C(){let e=await P();if(e){const s=e.map(({author:i,avatar_url:t,review:n})=>`<li class='swiper-slide  review-slide'>
            <img class="review-img" src="${t}" alt="${i}" />
            <h3 class="review-author">${i}</h3>
            <p class="review-text">${n}</p>
        </li>`).join("");S.insertAdjacentHTML("afterbegin",s);const c={modules:[y,h],initialSlide:0,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0}};new f(".reviews-swiper",c)}}new f(".projects-swiper-container",{modules:[y,h],slidesPerView:1,spaceBetween:30,breakpoints:{320:{spaceBetween:80},375:{spaceBetween:100}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});async function I(){const e=new f(".skills-container",{modules:[y],loop:!0,navigation:{nextEl:".skills-button-next",prevEl:".skills-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("keydown",function(s){s.key==="Tab"&&(s.preventDefault(),e.slideNext()),s.key==="ArrowRight"&&e.slideNext(),s.key==="ArrowLeft"&&e.slidePrev()})}new E(".accordion-container",{showMultiple:!0});const d=document.getElementById("mail"),M=document.getElementById("comment"),u=45,l=document.querySelector(".backdrope");document.querySelector(".button-close");const V=document.querySelector("form"),r=document.getElementById("email-error");let a,o;function N(e){a=e.target.value,a.length>u?(a=`...${a.substring(a.length-u)}`,e.target.value=a,e.target.setSelectionRange(0,0)):a.startsWith("...")&&(e.target.value=a.slice(3)),e.target.validity.valid?(r.classList.remove("error-input"),r.classList.add("success-input"),r.textContent="Succes!",r.style.display="block",c(d)):(r.classList.remove("success-input"),r.classList.add("error-input"),r.textContent="Invalid email, try again",r.style.display="block",i(d));function c(t){t.classList.remove("error"),t.classList.add("success")}function i(t){t.classList.remove("success"),t.classList.add("error")}}function O(e){o=e.target.value,o.length>u?(o=`...${o.substring(o.length-u)}`,e.target.value=o,e.target.setSelectionRange(o.length,o.length)):o.startsWith("...")&&(e.target.value=o.slice(3))}function A(e){l.classList.remove("is-open")}async function $(e){e.preventDefault(),await s(),l.classList.add("is-open"),d.value="",M.value="",r.textContent="",r.style.display="none",d.classList.remove("success"),d.classList.remove("error");async function s(){const c=new FormData(V),i={email:c.get("mail"),comment:c.get("comment")};try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!t.ok)throw new Error("Network response was not ok");const n=await t.json();console.log(n)}catch(t){console.error("Error:",t)}}}function j(e){e.target===l&&l.classList.remove("is-open")}function D(e){e.key==="Escape"&&l.classList.contains("is-open")&&l.classList.remove("is-open")}m.defaults.baseURL="https://portfolio-js.b.goit.study/api";I();C();const T=document.getElementById("mail");T.addEventListener("input",N);const R=document.getElementById("comment");R.addEventListener("input",O);const W=document.querySelector(".button-close");W.addEventListener("click",A);const F=document.querySelector("form");F.addEventListener("submit",$);const K=document.querySelector(".backdrope");K.addEventListener("click",j);document.addEventListener("keydown",D);
//# sourceMappingURL=commonHelpers.js.map
