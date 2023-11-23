let progress = document.getElementById("progress");
let song = document.getElementById("song");
let icon = document.getElementById("icon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

let playPause = () => {
  if (icon.classList.contains("fa-pause")) {
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  } else {
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  }
};

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
};
