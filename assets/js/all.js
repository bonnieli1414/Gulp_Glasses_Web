"use strict";

document.querySelector('.ham-toggle').addEventListener("click", function (e) {
  e.target.parentElement.classList.toggle('opened');
  e.target.parentElement.nextElementSibling.classList.toggle('opened');
});
//# sourceMappingURL=all.js.map
