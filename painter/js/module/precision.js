function validatePrecisionValue() {
  let precisionNumber = document.querySelector("#precision-number");

  if (precisionNumber.value < 2) {
    precisionNumber.value = 2;
  } else if (precisionNumber.value > 100) {
    precisionNumber.value = 100;
  }
}

function fillContainerWithPixelBoxesBasedOnThePrecisionVariable(precision) {
  let container = document.querySelector("#container");

  container.innerHTML = "";

  for (let i = 0; i < precision * precision; i++) {
    let div = document.createElement("div");

    div.className = "pixel";
    container.appendChild(div);
  }
}

function setContainerGridTemplateColumns(precision) {
  container.style.gridTemplateColumns = `repeat(${precision}, 1fr)`;
}

function setNumberOfPixelBoxesOnPrecisionValueChange(precision) {
  let precisionGoBtn = document.querySelector("#precision-btn");

  precisionGoBtn.addEventListener("click", () => {
    let precisionNumber = document.querySelector("#precision-number");
    precision = precisionNumber.value;

    fillContainerWithPixelBoxesBasedOnThePrecisionVariable(precision);
    setContainerGridTemplateColumns(precision);
  });
}

function preventTypingInsidePrecisionInputField() {
  const mouseOnlyNumberInputField = document.getElementById("precision-number");

  mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
    event.preventDefault();
  });
}

// check if pixel is filled
function myFunc() {
  let precisionNumber = document.querySelector("#precision-number");

  precisionNumber.addEventListener("change", () => {
    let colors = document.querySelectorAll(".color");

    for (let i = 0; i < colors.length; i++) {
      if (colors[i].style.background !== "white") {
        console.log("foo");
        console.log(colors[i].style.background);
      }
    }
  });
}

export {
  fillContainerWithPixelBoxesBasedOnThePrecisionVariable,
  setContainerGridTemplateColumns,
  setNumberOfPixelBoxesOnPrecisionValueChange,
  validatePrecisionValue,
  preventTypingInsidePrecisionInputField,
  myFunc,
};
