  new Swiper('#swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  new Swiper('#swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      }, 
      1200: {
        slidesPerView: 6,
      }
    },
 
    // Navigation arrows
    navigation: {
      nextEl: '.second_button_next',
      prevEl: '.second_button_prev',
      // clickable: true,
    },
  
  });