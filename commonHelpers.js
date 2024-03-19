import{a as p,S as m,N as f,K as y,M as w,A as S}from"./assets/vendor-bb54f42d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const g=document.querySelector(".menu-open"),v=document.querySelector(".menu-close"),E=document.querySelector(".mobile-menu");document.querySelector(".header-order");const C=document.querySelector(".header-nav__menu"),h=document.querySelector(".header-list"),M=document.querySelector(".mobile-btn");function P(){g.classList.add("is-hidden"),v.classList.remove("is-hidden"),E.classList.add("is-open")}function b(){E.classList.remove("is-open"),g.classList.remove("is-hidden"),v.classList.add("is-hidden")}p.defaults.baseURL="https://portfolio-js.b.goit.study/api";const k=document.querySelector(".reviews-wrapper");document.querySelector(".reviews-swiper");async function x(){try{return(await p.get("/reviews")).data}catch{return k.insertAdjacentHTML("afterbegin","<p class='review-error'>Not found</p>"),null}}async function B(){let e=await x();if(e){const o=e.map(({author:i,avatar_url:t,review:n})=>`<li class='swiper-slide  review-slide'>
            <img class="review-img" src="${t}" alt="${i}" />
            <h3 class="review-author">${i}</h3>
            <p class="review-text">${n}</p>
        </li>`).join("");k.insertAdjacentHTML("afterbegin",o);const r={modules:[f,y,w],initialSlide:0,slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},hashNavigation:{watchState:!0,onlyInViewport:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0,onlyInViewport:!0}};new m(".reviews-swiper",r)}}const O=new m(".projects-swiper-container",{modules:[f,y,w],slidesPerView:1,spaceBetween:30,breakpoints:{320:{spaceBetween:80},375:{spaceBetween:100}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",onlyInViewport:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0,onlyInViewport:!0}});function N(){document.querySelector(".button-up-down"),new S(".info-list",{duration:700,showMultiple:!0,openOnInit:[0],onOpen:e=>{e.querySelector(".ac-trigger").classList.add("button-roll")},onClose:e=>{e.querySelector(".ac-trigger").classList.remove("button-roll")}})}async function A(){const e=new m(".skills-container",{modules:[f,y,w],navigation:{nextEl:".skills-button-next",prevEl:".skills-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!0},loop:!0});document.addEventListener("keydown",function(o){o.key==="Tab"&&(o.preventDefault(),e.slideNext()),o.key==="ArrowRight"&&e.slideNext(),o.key==="ArrowLeft"&&e.slidePrev()})}new S(".accordion-container",{showMultiple:!0});const j=document.querySelector(".section.hero"),L=["./img/Herocolor5.png","./img/Herocolor4.png","./img/Herocolor6.png","./img/Herocolor3.png","./img/Herocolor2.png","./img/Herocolor.png"];let a=0;function H(){j.style.backgroundImage=`url(${L[a]})`,a++,a>L.length-1&&(a=0)}setInterval(H,5e3);const l=document.getElementById("mail"),T=document.getElementById("comment"),c=document.querySelector(".backdrope");document.querySelector(".button-close");const $=document.querySelector("form"),s=document.getElementById("email-error");let q,I;function D(e){q=e.target.value,e.target.validity.valid?(s.classList.remove("error-input"),s.classList.add("success-input"),s.textContent="Succes!",s.style.display="block",r(l)):(s.classList.remove("success-input"),s.classList.add("error-input"),s.textContent="Invalid email, try again",s.style.display="block",i(l));function r(t){t.classList.remove("error"),t.classList.add("success")}function i(t){t.classList.remove("success"),t.classList.add("error")}}function R(e){return I=e.target.value}function W(e){c.classList.remove("is-open")}async function F(e){e.preventDefault(),await K(),l.value="",T.value="",s.textContent="",s.style.display="none",l.classList.remove("success"),l.classList.remove("error")}async function K(){new FormData($);const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:q,comment:I})};try{const r=await fetch("https://portfolio-js.b.goit.study/api/requests",o);if(!r.ok)throw new Error("Network response was not ok");const i=await r.json();console.log(i),c.classList.add("is-open")}catch(r){console.error("Error:",r),alert("Error! Try again")}}function U(e){e.target===c&&c.classList.remove("is-open")}function _(e){e.key==="Escape"&&c.classList.contains("is-open")&&c.classList.remove("is-open")}function V(e){const o=e.getBoundingClientRect();return o.bottom>0&&o.right>0&&o.left<(window.innerWidth||document.documentElement.clientWidth)&&o.top<(window.innerHeight||document.documentElement.clientHeight)}N();p.defaults.baseURL="https://portfolio-js.b.goit.study/api";A();B();const J=document.getElementById("mail");J.addEventListener("input",D);const z=document.getElementById("comment");z.addEventListener("input",R);const G=document.querySelector(".button-close");G.addEventListener("click",W);const Q=document.querySelector("form");Q.addEventListener("submit",F);const X=document.querySelector(".backdrope");X.addEventListener("click",U);document.addEventListener("keydown",_);g.addEventListener("click",P);v.addEventListener("click",b);C.addEventListener("click",e=>{h.classList.toggle("is-hidden"),h.style.opacity=1});M.addEventListener("click",e=>{b()});feature/reviews-header;document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(o){o.preventDefault(),b(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const d=document.querySelector(".covers");O.on("keyPress",(e,o)=>{o===9&&e.slideNext()});V(d)?console.log("Елемент видимий в вьюпорті"):console.log("Елемент не видимий в вьюпорті");console.log(CSS);window.visualViewport.addEventListener("scroll",function(){V(d)?(console.log("Елемент видимий в вьюпорті"),d.animate([{opacity:0,color:"#fff"},{opacity:1,color:"#000"}],2e3)):console.log("Елемент не видимий в вьюпорті")});
//# sourceMappingURL=commonHelpers.js.map
