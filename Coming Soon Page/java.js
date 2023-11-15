let endDate = "4 November 2023 11:00 PM";
let days = document.querySelector(".Days");
let hours = document.querySelector(".Hours");
let minutes = document.querySelector(".Minutes");
let seconds = document.querySelector(".Seconds");

let clock = () => {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;

  if (diff < 0) {
    return;
  }

  days.innerHTML = Math.floor(diff / 3600 / 24);
  hours.innerHTML = Math.floor(diff / 3600) % 24;
  minutes.innerHTML = Math.floor(diff / 60) % 60;
  seconds.innerHTML = Math.floor(diff) % 60;
};

clock();

setInterval(() => {
  clock();
}, 1000);
