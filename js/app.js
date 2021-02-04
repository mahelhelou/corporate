$(document).ready(function () {
  $(window).scroll(function () {
    let top = $(window).scrollTop()
    if (top >= 60) {
      $('nav').addClass('bg-secondary')
    } else {
      if ($('nav').hasClass('bg-secondary')) {
        $('nav').removeClass('bg-secondary')
      }
    }
  })

  // Owl carousel
  $('#testimonials .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  }),

  // Portfolio carousel
    $('#portfolio .owl-carousel, #team .owl-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
  })
})
