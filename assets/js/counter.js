//counter
$(window).scroll(function () {
    var hT = $('#circle').offset().top,
        hH = $('#circle').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
  
    console.log((hT - wH), wS);
  
    if (wS > (hT + hH - wH)) {
        $('.counts').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        }); {
            $('.counts').removeClass('counts').addClass('counted');
        };
    }
  });