const nameInput = document.querySelector("#name-input1S");
const nameOutput = document.querySelector("#name-output1S");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  nameOutput.textContent = inputValue.length > 0 ? inputValue : "Anonymous ";
});

//////////////////////////////////////////////////////////////////////////////////////////
// task-new//
const name_input = document.querySelector("#name-input");
const name_output = document.querySelector("#name-output");

const messages = [
  "Be more joyful :)",
  "Keep smiling :)",
  "You are awesome :)",
  "Stay positive :)",
  "Believe in yourself :)",
];
let messageIndex = 0;

const Btn = document.createElement("button");
Btn.textContent = "Push";
Btn.style.margin = "10px";
Btn.style.backgroundColor = "rgb(155, 237, 237)";
Btn.style.border = "2px";
Btn.style.borderRadius = "10px";

document.body.append(Btn);

Btn.addEventListener("click", () => {
  const text_input = `Hellow ${name_input.value}!`;

  if (text_input.trim() !== "") {
    const ul_task = document.createElement("ul");
    const li_task = document.createElement("li");
    const taskNode = document.createTextNode(text_input);

    const btndelet = document.createElement("button");
    btndelet.textContent = "delete";

    btndelet.style.margin = "10px";
    btndelet.style.border = "10px";
    btndelet.style.backgroundColor = `#285aef`;
    btndelet.style.alignContent = `center`;
    btndelet.style.alignItems = "center";

    btndelet.addEventListener("click", () => {
      li_task.remove();
      name_output.textContent = "Anonymous";
    });

    li_task.appendChild(taskNode);
    li_task.appendChild(btndelet);
    ul_task.appendChild(li_task);
    name_output.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    document.body.appendChild(ul_task);

    name_input.value = "";
  } else {
    name_output.textContent = "Anonymous";
  }
});
