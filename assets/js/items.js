document.addEventListener("DOMContentLoaded", function () {
  const clickableCardElements = document.querySelectorAll(
    "#outer-container-items .card-item"
  );

  clickableCardElements.forEach(function (element) {
    element.addEventListener("click", function () {
      const card = element
      const frontSide = element.querySelector(".front-item");
      const backSide = element.querySelector(".back-item");

      card.classList.toggle("flip__card-item");
      frontSide.classList.toggle("hide-item");
      backSide.classList.toggle("show-item");
    });
  });
});

function handleElementClick(event) {
  alert("Clicked on the overlapped element!");
  event.stopPropagation();
}
