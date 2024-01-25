///////////////////////////////////////////////////////////
// Smoth Scrolling animation
document.querySelectorAll("a:link").forEach(function (link) {
  link.addEventListener("click", function (eventEl) {
    eventEl.preventDefault();
    const href = this.getAttribute("href");

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
