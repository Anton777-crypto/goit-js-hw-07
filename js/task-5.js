function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".color");

document.querySelector(".change-color1").addEventListener("click", function () {
  const new_color = getRandomHexColor();
  const main = (document.body.style.backgroundColor = new_color);
  color.textContent = new_color;
});
// ?????????????????????????????????????????????????????????????//////////
// task-new//
const textInput = document.querySelector(".text-input");
const text_p = document.getElementById("text");

document.querySelector(".change-color").addEventListener("click", function () {
  const new_text_input = getRandomHexColor();
  text_p.style.color = new_text_input;
  text_p.textContent = textInput.value || text_p.textContent;
  const OK = {
    textInput: textInput.value,
    main: getRandomHexColor(),
  };
  console.log(OK);
  textInput.value = "";
});
