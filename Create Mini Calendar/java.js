let date = document.querySelector(".date");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let daysName = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

let monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let calender = () => {
  let currentDate = new Date();
  date.innerHTML =
    (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
  day.innerHTML = daysName[currentDate.getDay()];
  month.innerHTML = monthsName[currentDate.getMonth()];
  year.innerHTML = currentDate.getFullYear();
};

setInterval(() => {
  calender();
}, 1000);

calender();
