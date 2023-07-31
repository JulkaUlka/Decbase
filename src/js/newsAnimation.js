const target = document.querySelector(".news");
const news = document.querySelectorAll(".news__item");

const options = {
  root: null,
  rootMargin: "300px",
  threshold: 1,
};

const observer = new IntersectionObserver(newsAnimate, options);

function newsAnimate(entries) {
  entries.forEach((entry) => {
    news.forEach((item, index) => {
      const delay = 600 * index;
      setTimeout(() => {
        if (index % 2 === 0) {
          entry.isIntersecting
            ? item.classList.add("leftSide")
            : item.classList.remove("leftSide");
        } else {
          entry.isIntersecting
            ? item.classList.add("rightSide")
            : item.classList.remove("rightSide");
        }
      }, delay);
    });
  });
}

observer.observe(target);
