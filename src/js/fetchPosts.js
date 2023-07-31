import { fetchAPI } from "./fetchAPI";

const BASE_URL = "https://newsapi.org/v2/everything";

const params = new URLSearchParams({
  apiKey: "b37cebb217f0492eb9ace831761d3337",
  q: "",
  language: "en",
});

const postList = document.querySelector(".services__list");
const filters = document.querySelector(".services__list-filter");
const buttons = filters.querySelectorAll(".services__button-filter");

const queryArr = ["interior design", "architecture", "furniture"];
let allPostsArr = [];

filters.addEventListener("click", setActiveButton);
filters.addEventListener("click", fetchPosts);

function setActiveButton(event) {
  const targetButton = event.target.closest("button");

  buttons.forEach((button) => {
    if (button === targetButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
function fetchPosts() {
  const targetButton = filters.querySelector(".active");
  if (!targetButton) return;

  const q = targetButton.value;
  if (!q) {
    fetchAllPosts();
  }
  params.set("q", q);

  fetchAPI(BASE_URL, params)
    .then((data) => createNewsCards(data.articles))
    .catch((error) => {
      console.error("Error loading posts:", error);
    });
}

function fetchAllPosts() {
  const fetchPromises = queryArr.map((q) => {
    params.set("q", q);

    return fetchAPI(BASE_URL, params)
      .then((data) => allPostsArr.push(data.articles[0]))
      .catch((error) => {
        console.error("Error loading posts:", error);
      });
  });

  Promise.all(fetchPromises)
    .then(() => createNewsCards(allPostsArr))
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}

function createNewsCards(cardInfo) {
  const maxPostsToShow = 5;
  const postArr = cardInfo.slice(0, maxPostsToShow);

  const markup = postArr
    .map((el) => {
      return `
        <li class="services__item">
          <p class="services__newTitle">${el.title}</p>
          <p class="services__text text">${el.description}</p>
          <a href="${el.url}" class="services__link text" target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      `;
    })
    .join("");

  postList.innerHTML = markup;
  allPostsArr = [];
}
fetchAllPosts();
