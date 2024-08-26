import{a as u,i as m,S as f}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const g=r=>`
  <li class="gallery-card">
    <a class="gallery-a" href="${r.largeImageURL}">
       <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}"  />
    </a>

<ul class="img-description-list">
  <li class="img-description-el">
  <p>Likes</p>
  <p>${r.likes}</p></li>
  <li class="img-description-el">
  <p>Views</p>
  <p>${r.views}</p></li>
  <li class="img-description-el">
  <p>Comments</p>
  <p>${r.comments}</p></li>
  <li class="img-description-el">
  <p>Downloads</p>
  <p>${r.downloads}</p></li>
</ul>

  </li>

  
`;u.defaults.baseURL="https://pixabay.com/api/";const h=(r,e)=>{const a={params:{key:"45491885-d594c4380fd68d18bb383d8af",q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:e,safesearch:!0}};return u.get("",a)},d=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),p=document.querySelector(".load-more");let i=1,c="",y=0;const L=async r=>{try{r.preventDefault(),i=1;const e=document.querySelector(".loader");if(e.classList.remove("is-hidden"),c=d.elements.user_query.value,!c.trim())return;const a=await h(c,i);if(a.data.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.classList.add("is-hidden"),l.innerHTML="";return}const o=a.data.hits.map(s=>g(s)).join("");e.classList.add("is-hidden"),l.innerHTML=o,y=l.querySelector("li").getBoundingClientRect().height,p.classList.remove("is-hidden"),new f(".js-gallery a",{captionsData:"alt",captionDelay:250}),d.reset()}catch(e){console.log(e)}},b=async r=>{try{i++;const e=await h(c,i),a=e.data.hits.map(o=>g(o)).join("");l.insertAdjacentHTML("beforeend",a),scrollBy({top:y*2,behavior:"smooth"}),i===e.data.totalHits/per_page&&(p.classList.add("is-hidden"),m.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};d.addEventListener("submit",L);p.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
