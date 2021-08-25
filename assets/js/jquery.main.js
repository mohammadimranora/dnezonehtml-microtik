$(document).ready(function() {

  "use strict"; 

  initCounter();
  // Counter init
  function initCounter() {

    "use strict";

    jQuery('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }


  initSlickCarousel();
  // slick init
  function initSlickCarousel() {

    "use strict";
    
    jQuery('.slick-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      adaptiveHeight: true,
      fade: true
    });

    jQuery('.fade-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      fade: true,
      adaptiveHeight: true,
      draggable: false,
      autoplay: false
    });

    jQuery('.popular-posts-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      slidesToShow: 3,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      infinite: false,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    jQuery('.why-say-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      adaptiveHeight: true,
      infinite: false
    });
  }

    


});

