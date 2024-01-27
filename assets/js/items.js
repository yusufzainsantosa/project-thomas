document.addEventListener("DOMContentLoaded", function () {
  const clickableCardElements = document.querySelectorAll(
    "#outer-container-items .card-item"
  );
  const clickableCloseModalElements = document.querySelectorAll(
    "#modals-container .modal-close-icon"
  );

  clickableCardElements.forEach(function (element) {
    element.addEventListener("click", function () {
      const card = element;
      const frontSide = element.querySelector(".front-item");
      const backSide = element.querySelector(".back-item");

      card.classList.toggle("flip__card-item");
      frontSide.classList.toggle("hide-item");
      backSide.classList.toggle("show-item");
    });
  });
  clickableCloseModalElements.forEach(function (element) {
    element.addEventListener("click", function () {
      const modalContainerElement = document.querySelector("#modals-container");
      // Access the parent node
      const parentNode = element.parentNode;
      // Access the grandparent node
      const grandparentNode = parentNode.parentNode;
      grandparentNode.classList.toggle("show-item");
      modalContainerElement.classList.toggle("show-item");
    });
  });
});

function handleElementClick(event) {
  const clickedElement = event.target;
  const nameElement = clickedElement.name;
  const modalContainerElement = document.querySelector("#modals-container");
  const modalElement = document.querySelector(`#modal-${nameElement}`);
  modalContainerElement.classList.toggle("show-item");
  modalElement.classList.toggle("show-item");
  event.stopPropagation();
}
