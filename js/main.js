'use strict';
(function () {
var promoSliderList = document.querySelector(".background-content");

var removePromoSliderActive = function() {
  document.querySelector(".slider-control__button--current").classList.remove("slider-control__button--current");
  document.querySelector(".slide-current").classList.remove("slide-current");
}

document.querySelectorAll(".slider-control__button").forEach(function(button, i) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();

    removePromoSliderActive();
    button.classList.add("slider-control__button--current");
    promoSliderList.children[i].classList.add("slide-current");
  })
  });
})();
