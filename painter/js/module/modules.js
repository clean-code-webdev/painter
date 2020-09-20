function addRemoveGrid() {
  let grid = document.querySelector("#grid");

  grid.addEventListener("click", () => {
    if (grid.style.color !== "rgb(129, 84, 84)") {
      changePixelColor(grid, "rgb(129, 84, 84)");
      changeGridBorder("0");
      return;
    }

    changePixelColor(grid, "#f1f3f6");
    changeGridBorder("0.1rem solid #f1f3f6");
  });
}

function changePixelColor(el, color) {
  el.style.color = color;
}

function changeGridBorder(borderValue) {
  let pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.border = borderValue;
  }
}

function clearCanvas() {
  let clearCanvas = document.querySelector("#clear");

  clearCanvas.addEventListener("click", () => {
    let pixels = document.querySelectorAll(".pixel");

    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.background = "white";
    }
  });
}

export { addRemoveGrid, clearCanvas };
