let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", function () {
  productImg.src = "image1.png";
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[1].addEventListener("click", function () {
  productImg.src = "image2.png";
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[2].addEventListener("click", function () {
  productImg.src = "image3.png";
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
