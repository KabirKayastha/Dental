var bannerCarousel = $(".banner .owl-carousel");
bannerCarousel.owlCarousel({
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
