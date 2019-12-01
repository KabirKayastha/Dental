//header animation
const header = document.getElementsByTagName("header")[0];
function headerAnim() {
  const observer = document.getElementsByClassName("header-observer")[0];

  let headerAnimOptions = {
    rootMargin: `-${header.clientHeight}px 0px 0px  0px`
  };

  let headerAnimObserver = new IntersectionObserver(function(
    entries,
    headerAnimObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("hide-top-headaer");
        return;
      }
      header.classList.remove("hide-top-headaer");
      //   header.style.backgroundColor = "#aaa";
    });
  },
  headerAnimOptions);

  if (typeof observer == "undefined" && observer == null) {
    header.classList.add("hide-top-headaer");
    return;
  }

  headerAnimObserver.observe(observer);
}

if (!header.classList.contains("no-anim")) {
  headerAnim();
}

// nav toggler
const navTogglerBtn = document.getElementsByClassName("nav-toggler-btn")[0];
const navItems = document.getElementsByClassName("nav-items")[0];
function toggleNav() {
  navTogglerBtn.addEventListener("click", function(event) {
    event.target.classList.toggle("fa-bars");
    event.target.classList.toggle("fa-times");
    navItems.classList.toggle("nav-items-shown");
  });
}

toggleNav();

//lightbox
let galleryContainer = document.getElementsByClassName("gallery-container")[0];
function lightbox() {
  let galleryImages = galleryContainer.querySelectorAll("img");
  let lightbox = document.getElementsByClassName("lightbox")[0];
  let lightboxImage = lightbox.getElementsByClassName("lightbox-img")[0];
  let lightboxCaption = lightbox.getElementsByClassName("lightbox-caption")[0];
  let closeButton = lightbox.getElementsByClassName("close")[0];
  let nextButton = lightbox.getElementsByClassName("next")[0];
  let prevButton = lightbox.getElementsByClassName("prev")[0];

  closeButton.addEventListener("click", closeLightbox);

  galleryImages.forEach((galleryImage, imageIndex) => {
    let activeImage = galleryImages[imageIndex];

    galleryImage.addEventListener("click", function() {
      currentImage(activeImage);
      openLightbox();

      nextButton.addEventListener("click", function() {
        if (imageIndex >= galleryImages.length - 1) {
          imageIndex = -1;
        }
        nextImage(imageIndex);
        imageIndex++;
      });

      prevButton.addEventListener("click", function() {
        if (imageIndex <= 0) {
          // this.disabled = "disabled";
          imageIndex = galleryImages.length;
        }
        prevImage(imageIndex);
        imageIndex--;
      });
    });
  });

  function openLightbox() {
    lightbox.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function currentImage(targetImg) {
    lightboxImage.src = targetImg.src;
    lightboxCaption.innerText = targetImg.parentElement.getElementsByClassName(
      "caption"
    )[0].innerText;
  }

  function nextImage(thisImage) {
    let nextImage = galleryImages[thisImage + 1];
    lightboxImage.src = nextImage.src;
    lightboxCaption.innerText = nextImage.parentElement.getElementsByClassName(
      "caption"
    )[0].innerText;
  }

  function prevImage(thisImage) {
    let prevImage = galleryImages[thisImage - 1];
    lightboxImage.src = prevImage.src;
    lightboxCaption.innerText = prevImage.parentElement.getElementsByClassName(
      "caption"
    )[0].innerText;
  }
}

if (typeof galleryContainer !== "undefined" && galleryContainer !== null) {
  //media query for lightbox
  var mediaQuery = window.matchMedia("(max-width: 1024px)");
  function watchMedia(mediaQuery) {
    if (mediaQuery.matches) {
      return;
    } else {
      lightbox();
    }
  }

  watchMedia(mediaQuery);
  mediaQuery.addListener(watchMedia);
}

//image lazy-load
let lazyImages = document.querySelectorAll("[data-src]");

function preLoadImg(img) {
  let src = img.getAttribute("data-src");

  if (!src) {
    return;
  }

  img.src = src;
}

let lazyLoadOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

let lazyLoadObserver = new IntersectionObserver(function(
  entries,
  lazyLoadObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preLoadImg(entry.target);
      lazyLoadObserver.unobserve(entry.target);
    }
  });
},
lazyLoadOptions);

lazyImages.forEach(lazyImage => {
  lazyLoadObserver.observe(lazyImage);
});

//slide animations
let slideTargets = document.querySelectorAll(".slide");

function slideAnim() {
  let slideOptions = {
    rootMargin: "0px 0px -100px 0px"
  };

  let slideObserver = new IntersectionObserver(function(
    entries,
    slideObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.target.classList.contains("slide-left")) {
        entry.target.classList.remove("slide-left");
      } else if (entry.target.classList.contains("slide-right")) {
        entry.target.classList.remove("slide-right");
      }

      slideObserver.unobserve(entry.target);
    });
  },
  slideOptions);

  slideTargets.forEach(slideTarget => {
    slideObserver.observe(slideTarget);
  });
}

slideAnim();
