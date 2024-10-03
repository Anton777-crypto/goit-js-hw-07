const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
const galleryItems = images
  .map(
    (image) =>
      `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);
// /////////////////////////////////////////////////////////////////////
// task-new//
const gallery1 = document.querySelector(".gallery");

images.forEach((image) => {
  const listItem = document.createElement("li");
  const img = document.createElement("img");

  img.src = image.url;
  img.alt = image.alt;
  img.width = 300;

  listItem.append(img);

  gallery1.append(listItem);
});
// ///////////////////////////////////////////////////////////////////////
// task-new//
const list = document.querySelector(".quotes-list");

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

quotes.forEach((item) => {
  const li_item = document.createElement("li");
  const p_item = document.createElement("p");
  const span_item = document.createElement("span");

  p_item.textContent = `"${item.text}"`;
  span_item.textContent = `- ${item.author}`;

  span_item.style.fontStyle = `italic`;

  list.append(li_item);
  li_item.append(p_item);
  li_item.append(span_item);
});
////////////////////////////////////////////////////////////////////////////////////////

const task_input = document.querySelector("#task-input");
const add_task = document.querySelector("#add-task");
const task_list = document.querySelector(".task-list");

add_task.addEventListener("click", () => {
  const text_input = task_input.value;

  if (text_input.trim() !== "") {
    const li_task = document.createElement("li");

    const taskNode = document.createTextNode(text_input);

    const BtnDelete = document.createElement("button");
    BtnDelete.textContent = "Delete";

    BtnDelete.style.margin = "10px";
    BtnDelete.style.border = "10px";
    BtnDelete.style.backgroundColor = `#285aef`;
    BtnDelete.style.alignContent = `center`;
    BtnDelete.style.alignItems = "center";

    BtnDelete.addEventListener("click", () => {
      li_task.remove();
    });

    li_task.append(taskNode, BtnDelete);
    task_list.append(li_task);

    task_input.value = "";
  }
});
