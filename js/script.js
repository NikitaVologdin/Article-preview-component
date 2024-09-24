const button = document.querySelector("#button");
const arrow = document.querySelector("#arrow");
const share = document.querySelector("#share");
const author = document.querySelector("#author");

button.addEventListener("click", (event) => {
  button.classList.toggle("dark-background");
  arrow.classList.toggle("invert");
  share.classList.toggle("display");
  // author.classList.toggle("invisible");
});
