let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let digitalClock = () => {
  let date = new Date();
  console.log(date.getHours());
  hour.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
  minute.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  second.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
};

digitalClock();

setInterval(() => {
  digitalClock();
}, 1000);
