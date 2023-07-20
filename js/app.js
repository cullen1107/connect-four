window.addEventListener("DOMContentLoaded", () => {
  let isPlayerOne = true;

  const checkSpot = (col) => {
    const colSpots = document.querySelectorAll(
      `.board-spot[data-col="${col}"]`
    );
    for (let i = colSpots.length - 1; i >= 0; i--) {
      if (!colSpots[i].classList.contains("filled")) {
        isPlayerOne
          ? colSpots[i].classList.add("filled", "player-one")
          : colSpots[i].classList.add("filled", "player-two");
        isPlayerOne = !isPlayerOne;
        break;
      }
    }
  };

  const checkBoard = () => {
    console.log("yo");
  };

  const boardSpots = document.querySelectorAll(".board-spot");
  boardSpots.forEach((boardSpot) => {
    boardSpot.addEventListener("click", () => {
      checkSpot(boardSpot.dataset.col);
      checkBoard();
    });
  });
});
