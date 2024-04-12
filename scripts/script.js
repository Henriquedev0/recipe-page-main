var card = document.querySelector(".container");

card.addEventListener("mouseover", function () {
  card.classList.add("hover");
});

card.addEventListener("mouseout", function () {
  card.classList.remove("hover");
});
