function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxContainer = document.getElementById("box");
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    boxes.push(box);
  }
  boxContainer.append(...boxes);
}

function destroyBoxes() {
  const boxContainer = document.getElementById("box");
  boxContainer.innerHTML = "";
}

const controls = document.querySelector("#controls input");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");

dataCreate.addEventListener("click", () => {
  const amount = Number(controls.value);

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  controls.value = "";
});

dataDestroy.addEventListener("click", destroyBoxes);
