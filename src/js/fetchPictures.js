import { fetchAPI } from "./fetchAPI";

const BASE_URL = "https://pixabay.com/api/";

const params = new URLSearchParams({
  key: "28877724-a03a9cbe7251f515debe20b20",
  q: "interior design",
  orientation: "horizontal",
  image_type: "photo",
  safesearch: true,
  order: "latest",
  editors_choice: true,
});

const galleryList = document.querySelector(".gallery__list");

fetchAPI(BASE_URL, params)
  .then((data) => createGalleryCards(data.hits))
  .catch((error) => {
    console.error("Error loading pictures:", error);
  });

function createGalleryCards(cardInfo) {
  const picturesArr = cardInfo.slice(0, 9);

  const markup = picturesArr
    .map((el) => {
      return `
            <li class="gallery__card">
            <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" class="gallery__img" />
          </li>
                  `;
    })
    .join("");
  galleryList.innerHTML = markup;
}
