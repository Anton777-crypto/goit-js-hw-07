const stn = document.querySelector(".div1");
stn.style.display = "flex";
stn.style.alignItems = "center";
stn.style.justifyContent = "center";
stn.style.height = "50px";
stn.style.Width = "150px";
stn.style.backgroundColor = "rgb(155, 237, 237)";
stn.style.border = "2px solid rgd(155,237,237)";
stn.style.borderRadius = "10px";
stn.style.margin = "10px";

document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();

    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert("All form fields must be filled in");
      return;
    }

    const All = {
      email: email,
      password: password,
    };

    console.log(All);

    form.reset();
  });

// ?????????????????????????????????????????????? ///////////
// task-new//
const DIV = document.querySelector(".div");
DIV.style.display = "flex";
DIV.style.alignItems = "center";
DIV.style.justifyContent = "center";
DIV.style.height = "50px";
DIV.style.Width = "150px";
DIV.style.backgroundColor = "rgb(155, 237, 237)";
DIV.style.border = "2px solid rgd(155,237,237)";
DIV.style.borderRadius = "10px";
DIV.style.margin = "10px";

const BTN = document.querySelector(".btn");
BTN.style.margin = "10px";

BTN.style.backgroundColor = "rgb(155, 237, 237)";
BTN.style.borderWidth = "1px";
BTN.style.border = "2px solid rgd(155,237,237)";
BTN.style.borderRadius = "10px";

const input = document.querySelectorAll(".input");
input.forEach((item) => {
  item.style.borderRadius = "10px";
  item.style.borderColor = "rgb(155, 237, 237)";
  item.style.borderWidth = "2px solid rgb(155, 237, 237)";
});

document
  .querySelector("#registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form_item = event.target;

    const firstName = form_item.elements.firstName.value.trim();
    const lastName = form_item.elements.lastName.value.trim();
    const email = form_item.elements.email.value.trim();

    if (!firstName || !lastName || !email) {
      alert("alarm - Please write your information");
      return;
    }

    const OK = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    console.log(OK);

    form_item.reset();
  });
