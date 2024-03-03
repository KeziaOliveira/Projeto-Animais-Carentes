// play/pause heart pulse animation on donation button
document.getElementById("donate-btn").addEventListener("mouseover", () => {
  document.getElementById("heart-pulse").style.animationPlayState = "running";

  document.getElementById("donate-btn").addEventListener("mouseout", () => {
    document.getElementById("heart-pulse").style.animationPlayState = "paused";
  });
});

// pull info card up on .note-card-alt hover
const altCardList = document.querySelectorAll(".note-card-alt");

altCardList.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.children[0].style.top = 0;
    card.children[0].style.backdropFilter = "blur(2px)";

    card.addEventListener("mouseout", () => {
      card.children[0].style.top = "75%";
      card.children[0].style.backdropFilter = "blur(0px)";
    });
  });
});
