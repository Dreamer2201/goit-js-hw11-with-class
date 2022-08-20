// import axios from 'axios';

export default class PicturesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchArticles () {
        const BASE_URL = 'https://pixabay.com/api/';
        const myAPIkey = '29146874-e25e04f0bbd5e8c4fffc4a4f6';
        const url = `${BASE_URL}?key=${myAPIkey}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=1`;
        fetch(url)
        .then(r => r.json())
        .then(data =>
            console.log(data));
    }
    get query() {
        this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}

// const BASE_URL = 'https://pixabay.com/api/';
// const myAPIkey = '29146874-e25e04f0bbd5e8c4fffc4a4f6';
// const perPages = 40;

// const fetchPictures = async(searchQuery, page) => {
//     const response = await axios.get(`${BASE_URL}?key=${myAPIkey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPages}&page=${page}`);
//     return response.data; 
// }
// export default fetchPictures;