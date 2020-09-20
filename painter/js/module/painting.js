function setCurrentColorToBlackOnPageLoad() {
  let currentColor = document.querySelector("#curr-color");
  currentColor.style.background = "black";
}

function paintPixelsOnLoad() {
  let pixel = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixel.length; i++) {
    pixel[i].style.background = "white";
  }
}

function getColorFromColorPicker() {
  let favColor = document.querySelector("#favcolor");
  let currColor = document.querySelector("#curr-color");

  favColor.addEventListener("change", () => {
    currColor.style.background = favColor.value;
  });
}

export {
  setCurrentColorToBlackOnPageLoad,
  paintPixelsOnLoad,
  getColorFromColorPicker,
};
