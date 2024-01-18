document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".toggle-btn");
  var menuItems = document.querySelector(".menu-items");

  toggleBtn.addEventListener("click", function () {
    menuItems.classList.toggle("show");
  });
});
