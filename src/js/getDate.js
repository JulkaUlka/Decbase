const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const dateElement = document.querySelector('.footer__date');
    dateElement.innerHTML = year;
  };
  
  getDate();