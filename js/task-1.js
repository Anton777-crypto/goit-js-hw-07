const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
// -///////////////////////////////////////////////////////////////////////
// task-new//
const total_messuring = document.querySelectorAll("#task-list .task");
console.log(`All order = ${total_messuring.length}`);
let completed1 = 0;
let not_completed = 0;
total_messuring.forEach((item) => {
  const Task = item.querySelector("h2").textContent;
  if (item.classList.contains("completed")) {
    console.log(`Task:${Task} is  completed `);
    completed1++;
  } else {
    console.log(`Task:${Task} is not completed `);
    not_completed++;
  }
});
console.log(`Total Completed Tasks: ${completed1}`);
console.log(`Total Not Completed Tasks: ${not_completed}`);
// ////////////////////////////////////////////////////////////////////////
// task-new//

const total_item = document.querySelectorAll("#cart .item");

let total_price = 0;

total_item.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const price = item.querySelector("p").textContent;
  const itemPrice = parseFloat(
    item.querySelector("p").textContent.replace("Price: $", "")
  );
  total_price += itemPrice;
  console.log(`${title}:${price}`);
});
console.log(`The full  price ${total_price}`);
