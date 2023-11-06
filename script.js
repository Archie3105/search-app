const apiKey = "c7OW1W3TWrvurSp6WY-ZfHKbRT3FAua0pQQDJL17nis";

const searchEl = document.querySelector(".search");
const inputEl = document.querySelector("#search-input");
const btn = document.querySelector(".searchBtn");
const searchResult = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-item");

var inputData = "";
var page = 1;

async function searchImages() {
  inputData = inputEl.value;
  
  const url =
    "https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}";

  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    // const imageWrapper = document.createElement("div");
    // imageWrapper.classList.add("output");
    const image = document.createElement("img");
    image.src = result.urls.small;
    // image.alt = result.alt_description;
    const imageLink = document.createElement("a");

    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageLink.appendChild(image);
    output.appendChild(imageLink);
    searchResult.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

searchEl.addEventListener("submit", (event) => {
  event.preventDefault()
  page = 1;
  searchImages();
});

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   page = 1;
//   searchImages();
// });

showMore.addEventListener("click", () => {
  searchImages();
});

// btn.addEventListener("click")
