const showInput2 = function (e) {
  if (this.textContent === "=" || e.key == "Enter") {
    if (input.value.includes("x")) {
      solution.value = eval(input.value.replace("x", "*"));
    } else {
      solution.value = eval(input.value);
    }
  } else if (this.textContent === "C") {
    input.value = input.value.slice(0, -1);
  } else if (this.textContent === "CE") {
    input.value = "";
  } else {
    if (e.key === undefined) {
      input.value += this.textContent;
    } else {
      input.value += e.key;
    }
  }
  //   this.classList.add("movemnet");
};
const input = document.querySelector(".screen").lastElementChild;
const solution = document.getElementById("solution");
keyPress = window.addEventListener("keydown", showInput2);

const keyButtons = document.querySelectorAll("button");
keyButtons.forEach((keyButton) =>
  keyButton.addEventListener("click", showInput2)
);
