const swiper = new Swiper('.testimonials__list', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
   
  navigation: {
        nextEl: '.carousel-arrow-right',
        prevEl: '.carousel-arrow-left',
    },
  });
  
  