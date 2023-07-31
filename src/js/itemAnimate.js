const blocks = document.querySelectorAll(".works__item");
const icons = document.querySelectorAll(".works__icon");

const firstMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="219" height="98" viewBox="0 0 219 98" fill="none">
  <path d="M0.99353 1H97.4935V97H218.994" stroke="#E0E0E0" stroke-width="2"/>
</svg>`;

const secondMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="219" height="97" viewBox="0 0 219 97" fill="none">
  <path d="M0.99353 96H97.4935V1H218.994" stroke="#E0E0E0" stroke-width="2"/>
</svg>`;

function itemAnimate() {
  blocks.forEach((item, index) => {
    const delay = 1400 * index;

    setTimeout(() => {
      item.classList.toggle("hovered");
    }, delay);

    setTimeout(() => {
      item.classList.remove("hovered");
    }, delay + 1000);
  });

  icons.forEach((icon) => {
    icon.innerHTML = "";
  });

  icons.forEach((icon, index) => {
    const markup = index === 1 ? secondMarkup : firstMarkup;
    setTimeout(() => {
      icon.insertAdjacentHTML("beforeend", markup);
    }, 800 + index * 1200);
  });
}
itemAnimate();
setInterval(itemAnimate, 6000);
