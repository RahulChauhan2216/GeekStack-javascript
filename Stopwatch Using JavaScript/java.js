let [second, minute, hours] = [0, 0, 0];
let timer = null;
let time = document.getElementById("time");

let stopWatch = () => {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) minute = 0;
    hours++;
    if (hours == 24) minute = 0;
    second = 0;
    hours = 0;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;

  time.innerHTML = `${h}:${m}:${s}`;
};

let watchStart = () => {
  timer = setInterval(() => {
    stopWatch();
  }, 1000);
};

let watchStop = () => {
  clearInterval(timer);
};

let watchReset = () => {
  clearInterval(timer);
  [second, minute, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
};
