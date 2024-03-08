// play/pause heart pulse animation when hovering donation button
const donateBtn = document.getElementById("donate-btn");
const heartIcon = document.getElementById("heart-icon");

donateBtn.addEventListener("mouseover", () => {
  heartIcon.style.animationPlayState = "running";

  donateBtn.addEventListener("mouseout", () => {
    heartIcon.style.animationPlayState = "paused";
  });
});
