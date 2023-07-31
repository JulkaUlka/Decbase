const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const jsConfetti = new JSConfetti();
const date = new Date().toLocaleDateString("uk-UA");

export function showGreetings(name) {
  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 1000,
  });

  const markup = ` <h2 class="modal__title title">Congratulations, ${name}!</h2>
    <p class="modal__text subtitle">Only ${date} you have 120% discount for you purchase!</p> `;

  modal.insertAdjacentHTML("beforeend", markup);
  backdrop.classList.remove("is-hidden");

  setTimeout(() => {
    backdrop.classList.add("is-hidden");
    modal.innerHTML = "";
  }, 5000);
}
