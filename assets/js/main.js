//client slider
$('.clients').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
        }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
      
//testimonials
$('.testimonial').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
   

        

//header Scroll
$(window).scroll(function () {
  var y = $(window).scrollTop();

  if (y > 100) {
      $("#header").addClass('nottop');
  } else {
      $("#header").removeClass('nottop');
  }
});


//content animation
jQuery(function ($) {
  var doAnimations = function () {
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      if ($animatables.size() == 0) {
          $(window).off('scroll', doAnimations);
      }
      $animatables.each(function (i) {
          var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 20) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
          }
      });
  };

  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});



//go to top
window.onscroll = function () { scrollTop() };
function scrollTop() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("top").style.display = "block";
  } else {
      document.getElementById("top").style.display = "none";
  }
};


//portfolio lightbox
baguetteBox.run('.portfolio', {
    animation: 'fadeIn',
    noScrollbars: true
});


//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


//slider text effect
var Messenger = function (el) {
    'use strict';
    var m = this;
    m.init = function () {
        m.codeletters = "demac";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            '<h2>WE ARE <b>MAKERS</b></h2>',
            '<h3>We have more then <b>10 year experience</b></h3>',
            '<h3>in this field. We know what you want.</h4>'
        ];
        setTimeout(m.animateIn, 1000);
    };
    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }
        return random_text;
    };
  
    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }
            var message = m.generateRandomString(m.current_length);
            $(el).html(message);
            setTimeout(m.animateIn, 50);
        } else {
            setTimeout(m.animateFadeBuffer, 50);
        }
    };
  
    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
            }
        }
  
        var do_cycles = false;
        var message = '';
        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }
        $(el).html(message);
  
        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
    };
  
    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }
  
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        setTimeout(m.animateIn, 200);
    };
  
    m.init();
  }
  
  console.clear();
  var messenger = new Messenger($('#cap'));


