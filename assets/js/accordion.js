document.addEventListener("DOMContentLoaded", function () {
  const clickableElements = document.querySelectorAll(
    "#accordion .accordion-click"
  );

  clickableElements.forEach(function (element) {
    element.addEventListener("click", function () {
      const innerContentElement = element.querySelector(".content");
      const innerContentTextElement = element.querySelector(".content-text");
      const innerArrowElement = element.querySelector(".accordion-arrow");
      const allAccordionElements = document.querySelectorAll(
        "#accordion .accordion-click"
      );

      // Remove 'active' class from all inner elements
      allAccordionElements.forEach(function (innerElement) {
        if (innerElement !== element) {
          const contentElement = innerElement.querySelector(".content");
          const contentTextElement =
            innerElement.querySelector(".content-text");
          const arrowElement = innerElement.querySelector(".accordion-arrow");
          contentElement.classList.remove("content-open");
          contentTextElement.classList.remove("content-text-open");
          arrowElement.classList.remove("rotate-icon");
        }
      });

      // Check if 'active' class exists on inner element
      console.log(innerContentElement.classList.contains("content-open"))
      if (innerContentElement.classList.contains("content-open")) {
        innerContentElement.classList.remove("content-open");
        innerContentTextElement.classList.remove("content-text-open");
        innerArrowElement.classList.remove("rotate-icon");
      } else {
        innerContentElement.classList.add("content-open");
        innerContentTextElement.classList.add("content-text-open");
        innerArrowElement.classList.add("rotate-icon");
      }
    });
  });
});
