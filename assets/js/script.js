///////////////////////////////////////////////////////////
// Smoth Scrolling animation
document.addEventListener("DOMContentLoaded", function () {
  const getPathName = window.location.pathname;
  const getCurrentPage = getPathName.substring(1);
  const getCurrentHash = window.location.hash;
  if (getCurrentHash) {
    navigateToPage(getCurrentPage, getCurrentHash);
  }

  document.addEventListener("click", function (event) {
    // Check if the clicked element is an anchor element
    const tagName = event.target.tagName.toLowerCase();
    const anchorElement = event.target.closest("a");
    if (tagName === "a") {
      // Prevent the default behavior (navigation)
      event.preventDefault();

      // You can also get the href value if needed
      const hrefValue = event.target.getAttribute("href");
      checkHref(hrefValue);
    } else if (tagName === "img" && anchorElement) {
      // Prevent the default behavior (navigation)
      event.preventDefault();

      // You can also get the href value if needed
      const hrefValue = anchorElement.getAttribute("href");
      checkHref(hrefValue);
    }
  });
});

function checkHref(href) {
  // Check if the href contains a hash
  if (href.includes("#")) {
    // Separate the page name and hash name
    const [pageName, hashName] = href.split("#");
    navigateToPage(pageName, `#${hashName}`);
  } else {
    // If no hash, set the page name
    const pageName = href;
    navigateToPage(pageName);
  }
}

// Move page
function movePage(href) {
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
}

// Handle navigation page to impressum
function navigateToPage(pageName, hashName) {
  const pathName = window.location.pathname;
  const currentPage = pathName.substring(1);
  if (currentPage == pageName) {
    if (hashName) {
      history.pushState(null, null, hashName);
      if (pageName == "impressum.html") {
        const impressumSection = document.getElementById(hashName.substring(1));
        console.log('##########################')
        console.log(impressumSection)
        setTimeout(function () {
          impressumSection.click();
        }, 100);
      }
      setTimeout(function () {
        movePage(hashName);
      }, 400);
    } else movePage("#");
  } else if (currentPage != pageName) {
    if (hashName) window.location.href = `${pageName}${hashName}`;
    else window.location.href = `${pageName}`;
  }
}
