import{a as m,i as h,S as L}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y=s=>`
  <li class="gallery-card">
    <a class="gallery-a" href="${s.largeImageURL}">
       <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}"  />
    </a>

<ul class="img-description-list">
  <li class="img-description-el">
  <p>Likes</p>
  <p>${s.likes}</p></li>
  <li class="img-description-el">
  <p>Views</p>
  <p>${s.views}</p></li>
  <li class="img-description-el">
  <p>Comments</p>
  <p>${s.comments}</p></li>
  <li class="img-description-el">
  <p>Downloads</p>
  <p>${s.downloads}</p></li>
</ul>

  </li>

  
`;m.defaults.baseURL="https://pixabay.com/api/";const g=(s,t)=>{const a={params:{key:"45491885-d594c4380fd68d18bb383d8af",q:s,image_type:"photo",orientation:"horizontal",per_page:15,page:t,safesearch:!0}};return m.get("",a)},p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".load-more");let i=1,n="",f=0;const l=document.querySelector(".loader"),b=async s=>{try{if(s.preventDefault(),i=1,l.classList.remove("is-hidden"),n=p.elements.user_query.value,!n.trim())return;const t=await g(n,i);if(t.data.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("is-hidden"),c.innerHTML="";return}const a=t.data.hits.map(e=>y(e)).join("");l.classList.add("is-hidden"),c.innerHTML=a,f=c.querySelector("li").getBoundingClientRect().height,u.classList.remove("is-hidden"),new L(".js-gallery a",{captionsData:"alt",captionDelay:250}),p.reset()}catch(t){console.log(t)}},v=async s=>{try{i++,l.classList.remove("is-hidden");const t=await g(n,i),a=t.data.hits.map(o=>y(o)).join("");l.classList.add("is-hidden"),c.insertAdjacentHTML("beforeend",a),scrollBy({top:f*2,behavior:"smooth"}),i>=Math.ceil(t.data.totalHits/15)&&(u.classList.add("is-hidden"),h.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}};p.addEventListener("submit",b);u.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
