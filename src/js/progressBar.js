const scrollProgress = document.querySelector(".progress-bar");
const header = document.querySelector("header");

const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
    
  const scrollPercent = (scrollTop / height) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;

  if (scrollPercent > 2) {
    header.style.boxShadow = `0px 5px 5px -3px rgba(230, 230, 230, 0.7)`;
  } else {
    header.style.boxShadow = `none`;
  }
});
