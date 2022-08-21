import axios from 'axios';

export default class PicturesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchArticles () {
        const BASE_URL = 'https://pixabay.com/api/';
        const myAPIkey = '29146874-e25e04f0bbd5e8c4fffc4a4f6';
        const url = `${BASE_URL}?key=${myAPIkey}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=${this.page}`;
        const response = await axios.get(url);
        return response.data;
    }
    incrementPage() {
        this.page +=1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
