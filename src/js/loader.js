window.addEventListener("load", getLoader);

function getLoader() {
  const word = "DECBASE";
  const letters = word.split("");
  const loader = document.querySelector(".loader");
  loader.classList.remove("is-hidden");

  letters.forEach((letter, index) => {
    const markup = `<div class="loader__letter"><svg xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="90" >${letter}</text>
    </svg></div>`;
    setTimeout(() => {
      loader.insertAdjacentHTML("beforeend", markup);
    }, 500 * index);
  });

  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 5000);
}
