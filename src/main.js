
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector(".js-search-form");
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtn = document.querySelector(".load-more");
let currentPage = 1;
let searchedValue = "";
let cardHeight = 0;

const onSearchFormSubmit = async event =>{
  try {
    event.preventDefault();
    currentPage = 1;
  const loader = document.querySelector(".loader");
  loader.classList.remove('is-hidden')
  searchedValue = searchFormEl.elements.user_query.value;
  if (!searchedValue.trim()){
    return;  
}

const response = await fetchPhotos(searchedValue, currentPage);
    if (response.data.hits.length === 0){
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
      });
      loader.classList.add('is-hidden');
      galleryEl.innerHTML = '';
      return;
    }
    const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
    loader.classList.add('is-hidden');
    galleryEl.innerHTML = galleryCardsTemplate;

    const galleryCardEl = galleryEl.querySelector('li');
    cardHeight = galleryCardEl.getBoundingClientRect().height;
    
    loadMoreBtn.classList.remove("is-hidden");
     new SimpleLightbox('.js-gallery a',{
      captionsData: 'alt',
      captionDelay: 250,
    })
    searchFormEl.reset();
  } catch(err) {
    console.log(err);
  }
}

const onLoadMore = async event =>{
try{
  currentPage ++;
  const response = await fetchPhotos(searchedValue, currentPage);
  const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
  
  galleryEl.insertAdjacentHTML("beforeend", galleryCardsTemplate);

  scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  if (currentPage === (response.data.totalHits / per_page)) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }

} catch(err){
  console.log(err);
}
}

searchFormEl.addEventListener("submit", onSearchFormSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);