(function ($) {
  var widthWindow = $(window).width();
  var topOffset = 0;
  AOS.init();

  /*================== Preloader start ==================*/
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

  });
  /*================== Preloader end ==================*/

  /*================== Slider testimonials start ==================*/
  $(function () {
    $('#testimonials__slider').slick({
      prevArrow: ".testimonials__nav.left",
      nextArrow: ".testimonials__nav.right",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
          }
        }
      ]
    });
  });
  /*================== Slider testimonials end ==================*/

  /*================== Anchor testimonials start ==================*/
  $(function () {
    if (widthWindow < 768) {
      topOffset = 78;
    }

    $('a[href^="#"]').on("click", function () {
      var target = $(this).attr("href");

      if (target && target !== '#') {
        $("html, body").animate({ scrollTop: $(target).offset().top - topOffset }, 1000);
      }
      return false;
    });
  });
  /*================== Anchor testimonials end ==================*/

  /*================== Canvas Menu start ==================*/

  function openMobileMenu() {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  }

  function closeMobileMenu() {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  }

  $("#mobile-menu-button").on('click', openMobileMenu);
  $("#close-button, .offcanvas-menu-overlay, .nav__list a").on('click', closeMobileMenu);

  /*================== Canvas Menu end ==================*/

  /*================== Modal window start ==================*/

  $('.modal-link').on("click", function (event) {
    event.preventDefault();
    this.blur();
    var target = $(this).attr("href");
    if (target && target !== "#") {
      $.get(target, function () {
        $(this.url).modal({
          fadeDuration: 100,
          fadeDelay: 0.30,
        });
      });
    }
  });

  /*================== Modal window end ==================*/

  /*================== Mask phone start ==================*/

  $('input[name=phone]').mask("+7-000-000-00-00");

  /*================== Mask phone end ==================*/

  /*================== Form handler start ==================*/

  $('.send_request_to_spec').submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/backend/mail.php", //Change
      data: th.serialize(),
      beforeSend: function () {
        $('.popup-wrapper').show();
        $('.modal .close').click()
      }
    }).done(function () {
      $('.popup-loading img').css("display", "none")
      $('.popup-loading h3 ').show();
      $('.popup-loading h2 ').text('Готово');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    }).fail(function () {
      alert("Ошибка, попробуйте позже");
    });
    return false;
  });

  /*================== Form handler start ==================*/

  /*================== Catch url params start ==================*/

  $(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var utm_source = !urlParams.get('utm_source') == '' ? urlParams.get('utm_source') : '';
    var utm_medium = !urlParams.get('utm_medium') == '' ? urlParams.get('utm_medium') : '';
    var utm_campaign = !urlParams.get('utm_campaign') == '' ? urlParams.get('utm_campaign') : '';
    var utm_content = !urlParams.get('utm_content') == '' ? urlParams.get('utm_content') : '';
    var utm_term = !urlParams.get('utm_term') == '' ? urlParams.get('utm_term') : '';


    !urlParams.get('utm_source') == '' ? $('form').append('<input type="hidden" name="utm_source" value="' + utm_source + '">') : '';
    !urlParams.get('utm_medium') == '' ? $('form').append('<input type="hidden" name="utm_medium" value="' + utm_medium + '">') : '';
    !urlParams.get('utm_campaign') == '' ? $('form').append('<input type="hidden" name="utm_campaign" value="' + utm_campaign + '">') : '';
    !urlParams.get('utm_content') == '' ? $('form').append('<input type="hidden" name="utm_content" value="' + utm_content + '">') : '';
    !urlParams.get('utm_term') == '' ? $('form').append('<input type="hidden" name="utm_term" value="' + utm_term + '">') : '';
  });

  /*================== Catch url params end ==================*/

})($, jQuery);
