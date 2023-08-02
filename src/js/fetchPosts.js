import { fetchAPI } from "./fetchAPI";

const BASE_URL = "https://swapi.dev/api/";

const postList = document.querySelector(".services__list");
const filters = document.querySelector(".services__list-filter");
const buttons = filters.querySelectorAll(".services__button-filter");

const endpointArr = ["planets", "people", "species"];
let allPostsArr = [];
let endpoint;

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

  endpoint = targetButton.value;
  if (!endpoint) {
    fetchAllPosts();
  }

  fetchAPI(BASE_URL + endpoint)
    .then((data) => createNewsCards(data.results))
    .catch((error) => {
      console.error("Error loading posts:", error);
    });
}

function fetchAllPosts() {
  const fetchPromises = endpointArr.map((i) => {
    return fetchAPI(BASE_URL + i)
      .then((data) => allPostsArr.push(data.results[0]))
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
      const propertiesToShow = Object.entries(el).slice(0, 4);

      const propertiesString = propertiesToShow.map(
        ([key, value]) => `${key}: ${value}`
      );

      return `
        <li class="services__item">
          <p class="services__newTitle">${propertiesString[0]}</p>
          <p class="services__text text">${propertiesString[1]}</p>
          <p class="services__text text">${propertiesString[2]}</p>
          <p class="services__text text">${propertiesString[3]}</p>
        </li>
      `;
    })
    .join("");
  postList.innerHTML = markup;
  allPostsArr = [];
}
fetchAllPosts();
