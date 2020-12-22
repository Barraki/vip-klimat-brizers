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
  $(function () {
    // (".open-popup-link").magnificPopup({
    //   type: 'inline',
    //   midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    // });
  });

  // TODO!: Add modal windows
  /*================== Modal window end ==================*/

  /*================== Modal window start ==================*/

  $('input[name=phone]').mask("+38 (000) 000-00-00");

  /*================== Modal window end ==================*/


})($, jQuery);
