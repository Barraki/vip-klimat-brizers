

// import "./vendor/jquery-ui.min";
// import "./vendor/jquery.slicknav";
// import "./vendor/jquery.magnific-popup.min";
// import "./vendor/jquery.mask.min";

// TODO!: Relink vendor library to html

(function () {
  /*================== Slider testimonials start ==================*/
  $(function () {
    $('#testimonials__slider').slick({
      prevArrow: ".testimonials__nav.left",
      nextArrow: ".testimonials__nav.right"
    });
  });
  /*================== Slider testimonials end ==================*/

  /*================== Anchor testimonials start ==================*/
  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    if (target) {
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
    }
    return false;
  });
  /*================== Anchor testimonials end ==================*/

  /*================== Auto hide navbar start ==================*/
  jQuery(document).ready(function ($) {
    var $header = $('.navbar-autohide'),
      scrolling = false,
      previousTop = 0,
      currentTop = 0,
      scrollDelta = 10,
      scrollOffset = 150

    $(window).on('scroll', function () {
      if (!scrolling) {
        scrolling = true

        if (!window.requestAnimationFrame) {
          setTimeout(autoHideHeader, 250)
        }
        else {
          requestAnimationFrame(autoHideHeader)
        }
      }
    })

    function autoHideHeader() {
      var currentTop = $(window).scrollTop()

      // Scrolling up
      if (previousTop - currentTop > scrollDelta) {
        $header.removeClass('is-hidden')
      }
      else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        // Scrolling down
        $header.addClass('is-hidden')
      }

      previousTop = currentTop
      scrolling = false
    }
  });
  /*================== Auto hide navbar end ==================*/

  /*================== Canvas Menu start ==================*/

  $(".canvas__open").on('click', function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on('click', function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });
  /*================== Canvas Menu end ==================*/


  /*================== Navigation start ==================*/
  $(".nav__list").slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: false,
    'closedSymbol': '<i class="fa fa-angle-right"></i>', // Character after collapsed parents.
    'openedSymbol': '<i class="fa fa-angle-up"></i>', // Character after expanded parents.
    'init': function (e) {
      $('#mobile-menu-wrap a[href^="/#"]').on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
      });
    }
  },
  console.log("work")
  );
  /*================== Navigation end ==================*/
})(jQuery);
