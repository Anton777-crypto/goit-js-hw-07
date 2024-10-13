function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const creatbox = document.getElementById("box");
  const box = [];

  for (let i = 0; i < amount; i++) {
    const calculation = 30 + i * 10;
    const boxnew = document.createElement("div");
    boxnew.style.backgroundColor = getRandomHexColor();
    boxnew.style.height = `${calculation}px`;
    boxnew.style.width = `${calculation}px`;
    box.push(boxnew);
  }
  creatbox.append(...box);
}

function destroyBoxes() {
  const destorybox = document.getElementById("box");
  destorybox.innerHTML = "";
}

const controls = document.querySelector("#controls  input");
const data_create = document.querySelector("[data-create]");
const data_destroy = document.querySelector("[data-destroy]");

data_create.addEventListener("click", () => {
  const newcreat = Number(controls.value);

  if (newcreat < 1 || newcreat > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(newcreat);
  controls.value = "";
});

data_destroy.addEventListener("click", destroyBoxes);
