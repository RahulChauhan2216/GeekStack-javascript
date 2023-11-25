let qrImage = document.querySelector("#qrImage");
let imgBox = document.querySelector("#imgBox");
let text = document.querySelector("#text");

let generateQr = () => {
  if (text.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    imgBox.classList.add("adder");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
};
