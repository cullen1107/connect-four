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

  const checkBoard = (player) => {
    const filledSpotsPlayerOne =
      document.querySelectorAll(".filled.player-one");
    console.log(filledSpotsPlayerOne);
    const winningHorizontalCombos = [
      ["a6", "b6", "c6", "d6"],
      ["b6", "c6", "d6", "e6"],
      ["c6", "d6", "e6", "f6"],
      ["d6", "e6", "f6", "g6"],

      ["a5", "b5", "c5", "d5"],
      ["b5", "c5", "d5", "e5"],
      ["c5", "d5", "e5", "f5"],
      ["d5", "e5", "f5", "g5"],
    ];
    let spots = [];
    filledSpotsPlayerOne.forEach((spot) => {
      spots.push(spot.dataset.id);
    });
  };
  const boardSpots = document.querySelectorAll(".board-spot");
  boardSpots.forEach((boardSpot) => {
    boardSpot.addEventListener("click", () => {
      checkSpot(boardSpot.dataset.col);
      checkBoard();
    });
  });
});
