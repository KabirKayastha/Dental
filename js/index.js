//header animation
const header = document.getElementsByTagName("header")[0];
function headerAnim() {
  const banner = document.getElementsByClassName("banner")[0];

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

  if (typeof banner == "undefined" && banner == null) {
    header.classList.add("hide-top-headaer");
    return;
  }

  headerAnimObserver.observe(banner);
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

//appearance animation
