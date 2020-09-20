// set currently used tool
function setCurrentlyUsedTool() {
  let currentlyUsedTool;
  let tools = document.querySelectorAll(".icons");

  tools.forEach((tool) => {
    tool.addEventListener("click", () => {
      changeDisplayedTool(tool);

      currentlyUsedTool = tool.id;

      if (currentlyUsedTool === "eraser") {
        erasePixel();
        return;
      } else if (currentlyUsedTool === "brush") {
        paintingFunctions();
        return;
      } else if (currentlyUsedTool === "eye-dropper") {
        eyeDropColor();
        return;
      } else {
        return;
      }
    });
  });
}

function paintingFunctions() {
  fillPixelWithCurrentColor();
  paintWithShiftKeyPressed();
  paintWithCntrlKeyDown();
}

// change displayed tool
function changeDisplayedTool(el) {
  let currTool = document.querySelector("#currently-used-tool > p > i");
  currTool.innerHTML = el.outerHTML;
}

// eye-dropper
function eyeDropColor() {
  let pixels = document.querySelectorAll(".pixel");
  let currentColor = document.querySelector("#curr-color");

  pixels.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      currentColor.style.background = pixel.style.background;

      let brush = document.querySelector("#brush");

      let currTool = document.querySelector("#currently-used-tool > p > i");
      currTool.innerHTML = brush.outerHTML;
    });
  });
}

// brush
function fillPixelWithCurrentColor() {
  let pixels = document.querySelectorAll(".pixel");
  let currentColor = document.querySelector("#curr-color");

  pixels.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      let pixelBg = pixel.style.background;
      pixelBg = currentColor.style.background;
      return pixelBg;
    });
  });
}

// paint with shift
function paintWithShiftKeyPressed() {
  let pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      let keyDown = e.shiftKey;
      if (keyDown) {
        fillPixel(pixel);
      }
    });
  });
}

// paint with ctrl
function paintWithCntrlKeyDown() {
  let pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      let keyDown = e.ctrlKey;
      if (keyDown) {
        if (pixel.style.background === "white") {
          fillPixel(pixel);
        }
      }
    });
  });
}

// eraser
function erasePixel() {
  let currentColor = document.querySelector("#curr-color");
  currentColor.style.background = "white";
}

// current color
function fillPixel(pixel) {
  let color = document.querySelector("#curr-color").style.background;
  pixel.style.background = color;
}

export { setCurrentlyUsedTool };
