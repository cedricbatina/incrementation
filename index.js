const mainContainer = document.getElementById("mainContainer");
mainContainer.setAttribute("id", "mainContainer");
mainContainer.classList.add("card", "w-50", "mx-auto", "dark", "mt-1");
const mainTitle = document.createElement("h2");
mainContainer.appendChild(mainTitle);
mainTitle.classList.add("text-center", "mb-2");
mainTitle.innerHTML = "@rtful Batina Creative Studios";
let slogan = document.createElement("p");
mainContainer.appendChild(slogan);
slogan.classList.add("text-center", "fs-5");
slogan.textContent = "Communication is the key";
const title = document.createElement("h3");

let compteur = document.getElementById("compteur");
let count = 0;
let saveButton = document.createElement("button");
mainContainer.appendChild(title);
title.classList.add("text-center", "card-header", "text-white", "bg-dark");
title.innerHTML = "INCREMENTATION";
mainContainer.appendChild(compteur);
compteur.classList.add("text-center", "card-body");

//mcounter.innerText = 0;
let buttonGroup = document.createElement("div");
mainContainer.appendChild(buttonGroup);
buttonGroup.classList.add("d-grid", "gap-2", "col-6", "m-auto");
let incrementButton = document.createElement("button");
buttonGroup.appendChild(incrementButton);
incrementButton.setAttribute("id", "incrementButton-btn");
incrementButton.classList.add("btn-warning", "btn");
incrementButton.innerText = "INCREMENT";

incrementButton.addEventListener("click", function countdown() {
  count += 1;
  compteur.textContent = count;
  console.log(compteur);
});
// create a save button to store datas

buttonGroup.appendChild(saveButton);
saveButton.innerHTML = "SAVE";
saveButton.classList.add("btn", "btn-success");
let previousEntries = document.getElementById("previousEntries");

mainContainer.appendChild(previousEntries);
previousEntries.classList.add("text-center", "mt-3");
let saveElement = document.getElementById("saveEl");
mainContainer.appendChild(saveElement);
saveElement.classList.add(
  "card-footer",
  "text-center",
  "text-white",
  "bg-dark"
);

saveButton.addEventListener("click", function save() {
  let countString = count + "" + " - ";
  saveElement.innerHTML += countString;
  compteur.textContent = 0;
  count = 0;
});
let eraseButton = document.createElement("button");
buttonGroup.appendChild(eraseButton);
eraseButton.classList.add("btn", "btn-danger");
eraseButton.textContent = "ERASE";
eraseButton.addEventListener("click", function eraseDatas() {
  saveElement.textContent = "";
});
let paragraph = document.createElement("p");
mainContainer.appendChild(paragraph);
paragraph.textContent =
  "Little Incremention Web Application - @rtful Batina Creative Studios";
paragraph.classList.add("fs-6", "fw-light", "text-center");
