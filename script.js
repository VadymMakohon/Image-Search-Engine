const accessKey = "18kM1ktlMdk-usIpso39A1L3NaKD60jgloZ_8ll9CzM";

const searchForm = document.getElementById("search-form"); // Correct id
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
    })
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; // Reset to page 1 on new search
    searchImages();
});
