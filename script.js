var scrollDots = Array.from(document.querySelectorAll(".scroll__dots"));
var priceCards = document.querySelector(".price__cards");
var activedots = document.querySelector(".active__dot");

const handleClick = (e) => {
    e.preventDefault();
    scrollDots.forEach(node => {
        node.classList.remove('active__dot');
      });
      e.currentTarget.classList.add('active__dot');
}
scrollDots.forEach(node => {
    node.addEventListener('click', handleClick)
  });