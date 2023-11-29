let toastBox = document.querySelector("#toastBox");
let successMsg =
  '<i class="fa-solid fa-circle-check"></i>successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid input';

let showToast = (msg) => {
  let toast = document.createElement("div");
  toast.classList.add("msgClass");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
};
