const serchForm = document.getElementById("search-form");
const serchBox = document.getElementById("search-box");
const serchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    canst url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}';
}