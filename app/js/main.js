const toggleDropdown = (dropdownWrapper, dropdownList) => {
  dropdownWrapper.addEventListener("click", () => {
    dropdownList.classList.toggle("model-dropdown__sub-list--visible");
    dropdownWrapper.classList.toggle("model-dropdown__wrapper--active");
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".model-dropdown")) {
      dropdownList.classList.remove("model-dropdown__sub-list--visible");
      dropdownWrapper.classList.remove("model-dropdown__wrapper--active");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const modelDropdownWrapper = document.querySelector(
    ".model-dropdown__wrapper"
  );
  const modelDropdownSubList = document.querySelector(
    ".model-dropdown__sub-list"
  );
  toggleDropdown(modelDropdownWrapper, modelDropdownSubList);

  const modelDropdownSubText = document.querySelector(
    ".model-dropdown__sub-text"
  );
  const modelDropdownNestedList = document.querySelector(
    ".model-dropdown__nested-list"
  );
  modelDropdownSubText.addEventListener("click", (e) => {
    e.stopPropagation();
    modelDropdownNestedList.classList.toggle(
      "model-dropdown__nested-list--visible"
    );
    modelDropdownSubText.parentElement.classList.toggle(
      "model-dropdown__sub-item--active"
    );
  });

  const burgerMenu = document.querySelector(".burger-menu");
  const dimming = document.querySelector(".dimming");
  const modelDropdown = document.querySelector(".model-dropdown");
  burgerMenu.addEventListener("click", () => {
    modelDropdown.classList.toggle("model-dropdown--visible");
    dimming.classList.toggle("dimming--active");
  });
  document.addEventListener("mousedown", (event) => {
    if (!event.target.closest(".model-dropdown")) {
      modelDropdown.classList.remove("model-dropdown--visible");
      dimming.classList.remove("dimming--active");
    }
  });
});
