var bannerCarousel = $(".banner .owl-carousel");
bannerCarousel.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoWidth: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  fluidSpeed: 1000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
});

$(".banner .carousel-next").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  bannerCarousel.trigger("next.owl.carousel", [1000]);
});
$(".banner .carousel-prev").click(function() {
  bannerCarousel.trigger("prev.owl.carousel", [1000]);
});

var doctorsCarousel = $(".doctors .owl-carousel");
doctorsCarousel.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoWidth: false,
  autoplay: false,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  fluidSpeed: 1000,
  //   autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

$(".doctors .carousel-next").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  doctorsCarousel.trigger("next.owl.carousel", [1000]);
});
$(".doctors .carousel-prev").click(function() {
  doctorsCarousel.trigger("prev.owl.carousel", [1000]);
});

var testimonialsCarousel = $(".testimonials .owl-carousel");
testimonialsCarousel.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  mouseDrag: false,
  touchDrag: false,
  animateIn: "slideInRight",
  animateOut: "fadeOutLeft",
  autoWidth: false,
  smartSpeed: 1000,
  fluidSpeed: 1000,
  responsive: {
    0: {
      items: 1
    }
  }
});

$(".testimonials .owl-dot").click(function() {
  testimonialsCarousel.trigger("to.owl.carousel", [$(this).index()]);
  $(".owl-dot").removeClass("active");
  $(this).addClass("active");
});
