// play/pause heart pulse animation on donation button
document.getElementById("donate-btn").addEventListener("mouseover", () => {
  document.getElementById("heart-pulse").style.animationPlayState = "running";

  document.getElementById("donate-btn").addEventListener("mouseout", () => {
    document.getElementById("heart-pulse").style.animationPlayState = "paused";
  });
});
