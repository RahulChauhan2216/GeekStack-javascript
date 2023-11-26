let quotes = document.querySelector(".quotelines");
let spann = document.querySelector(".spann");

let getQuotes = async () => {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  quotes.innerHTML = data.content;
  spann.innerHTML = data.author;
};

let tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "---by" + spann.innerHTML,"Tweet Window","width= 600 height=300"
  );
};

getQuotes();
