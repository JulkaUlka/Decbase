const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const eventsToTrack = ["mousemove", "keypress", "scroll"];
const markup = `<p class="modal__text">Are you still here?</p>
    <button type="button" class="button" id="confirm">Yes</button>`;

const goodbyeMessage = `<p class="modal__text">"Goodbye! Hope we will see you soon!"</p>
    `;

let counter = 0;
let modalIsOpen = false;

const startTimer = () => {
  setInterval(() => {
    if (!modalIsOpen) {
      counter++;
      if (counter === 60) {
        showAlert();
      }
    } else if (modalIsOpen && counter === 60) {
      setTimeout(() => {
        showGoodbyeMessage();
        window.close();
      }, 2000);
    }
  }, 1000);
};

const resetTimer = () => {
  counter = 0;
};

const showAlert = () => {
  modal.insertAdjacentHTML("beforeend", markup);
  backdrop.classList.remove("is-hidden");
  modalIsOpen = true;

  const button = document.getElementById("confirm");

  button.addEventListener("click", () => {
    backdrop.classList.add("is-hidden");
    modal.innerHTML = "";
    modalIsOpen = false;
    resetTimer();
  });
};

const showGoodbyeMessage = () => {
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", goodbyeMessage);
};

eventsToTrack.forEach((event) => {
  document.addEventListener(event, resetTimer);
});

startTimer();
