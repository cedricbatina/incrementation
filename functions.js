function countdown() {
  count += 1;
  compteur.textContent = count;
  console.log(compteur);
}
function eraseDatas() {
  saveElement.textContent = "";
}
function save() {
  let countString = count + "" + " - ";
  saveElement.innerHTML += countString;
  compteur.textContent = 0;
  count = 0;
}

export default (countdown, eraseDatas, save);
