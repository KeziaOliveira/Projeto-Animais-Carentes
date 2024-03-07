// play/pause heart pulse animation when hovering donation button
const donateBtn = document.getElementById("donate-btn");
const heartIcon = document.getElementById("heart-icon");

donateBtn.addEventListener("mouseover", () => {
  heartIcon.style.animationPlayState = "running";

  donateBtn.addEventListener("mouseout", () => {
    heartIcon.style.animationPlayState = "paused";
  });
});

// slide up info card when hovering .card elements
const cardsList = document.querySelectorAll(".card");

cardsList.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.children[0].style.top = 0;
    card.children[0].style.backdropFilter = "blur(2px)";

    card.addEventListener("mouseout", () => {
      card.children[0].style.top = "75%";
      card.children[0].style.backdropFilter = "blur(0px)";
    });
  });
});
