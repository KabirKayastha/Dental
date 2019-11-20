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

  headerAnimObserver.observe(banner);
}

if (!header.classList.contains("no-anim")) {
  headerAnim();
}

//appearance animation
