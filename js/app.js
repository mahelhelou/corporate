$(document).ready(function () {
  // Adjust slider height (100 vh, after header)
  /* let windowHeight = $(window).height()
  let navbarHeight = $('.navbar').innerHeight()

  $('.carousel, .carousel-inner, .carousel-item, .carousel-item img').height(windowHeight - navbarHeight) */

  // Smooth scroll
  $('.nav-link, .navbar-brand').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault()

      const hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      )
    }
  })

  // Add active class to nav-links on click

  // Add active class to Home link by default (Use html markup instead -> .active)
  // $('.navbar .nav-link:first').addClass('active')

  $('.navbar .nav-item .nav-link').on('click', function () {
    // When markup is known and unified
    // $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')

    // If markup isn't tidy or unified with the team (Slower)
    $('.navbar a').removeClass('active')
    $(this).addClass('active')
  })

  // Add active class to nav-link on scroll
  let sections = $('section')
  let nav = $('.navbar')
  let nav_height = nav.outerHeight()

  $(window).on('scroll', function () {
    let current_position = $(this).scrollTop()

    sections.each(function () {
      let top = $(this).offset().top - nav_height
      let bottom = top + $(this).outerHeight()

      if (current_position >= top && current_position <= bottom) {
        nav.find('a').removeClass('active')
        // sections.removeClass('active')

        // $(this).addClass('active') // colorize section's content
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active')
      }
    })
  })

  // Apply navbar background on scroll only
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

  // Portfolio & team carousels (Owl carousel)
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

  // Testimonials carousel (Owl carousel)
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
  })
})
