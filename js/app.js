window.addEventListener("DOMContentLoaded", () => {
  const checkSpot = (col) => {
    const colSpots = document.querySelectorAll(
      `.board-spot[data-col="${col}"]`
    );
    console.log(colSpots);
    for (let i = colSpots.length - 1; i >= 0; i--) {
      if (!colSpots[i].classList.contains("filled")) {
        colSpots[i].classList.add("filled");
        break;
      }
    }
  };

  const boardSpots = document.querySelectorAll(".board-spot");
  boardSpots.forEach((boardSpot) => {
    boardSpot.addEventListener("click", () => {
      checkSpot(boardSpot.dataset.col);
    });
  });
});
