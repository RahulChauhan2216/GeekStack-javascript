let userInput = document.querySelector("#date");
let result = document.querySelector(".result");

let btn = document.querySelector(".btn").addEventListener("click", function () {
  let end = new Date(userInput.value);
  let now = new Date();

  let diff = (now - end) / 1000;
  let days = Math.floor(diff / 3600 / 24);
  let years = Math.floor(days / 365);
  return (result.innerHTML = `<h2>You are ${years} years old <h2>`);
});
