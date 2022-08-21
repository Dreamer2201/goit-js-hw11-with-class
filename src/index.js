import {Notify} from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {refs} from './js/refs';
import insertCreatedAnimals from './js/createListAnimals';
import PicturesApiService from './js/fetchPictures';

const picturesApiServise = new PicturesApiService;

refs.btnLoadMoreEl.classList.add('hide');
const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

refs.formEl.addEventListener('submit', onSubmitForm);
refs.btnLoadMoreEl.addEventListener('click', onClickBtnLodeMore);

async function onSubmitForm (event) {
    event.preventDefault();
    picturesApiServise.query = event.currentTarget.elements.searchQuery.value;
    picturesApiServise.resetPage();
    try { 
        const array = await picturesApiServise.fetchArticles();
        clearGalleryList();
        Notify.info(`We has found ${array.total} results.`);
        filterFetchResult(array);
        insertCreatedAnimals(array.hits);        
    } catch (error) { console.log(error) };
}
async function onClickBtnLodeMore () {
    picturesApiServise.incrementPage();
    try {
        const array = await picturesApiServise.fetchArticles();
        filterFetchResult(array);
        insertCreatedAnimals(array.hits);
    } catch (error) { console.log(error) };
}
function clearGalleryList () {
    refs.galleryEl.innerHTML = "";
}
function filterFetchResult(fetchResult) {
    if (picturesApiServise.page === Math.ceil(fetchResult.totalHits / 20)) {
        insertCreatedAnimals(fetchResult.hits); 
        refs.btnLoadMoreEl.classList.add('hide'); 
        Notify.info("We're sorry, but you've reached the end of search results.");
        lightbox.refresh();
        return;
    } else if (fetchResult.total === 0) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");   
        return;
    } else { 
        insertCreatedAnimals(fetchResult.hits);  
        refs.btnLoadMoreEl.classList.remove('hide');
        lightbox.refresh();
        return;
    }
}


