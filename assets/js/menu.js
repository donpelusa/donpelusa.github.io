document.addEventListener('DOMContentLoaded', function () {
  const mobileNavButton = document.querySelector('.mobile-nav');
  const menuBar = document.querySelector('.menubar');

  mobileNavButton.addEventListener('click', function () {
    menuBar.classList.toggle('active');
  });
});