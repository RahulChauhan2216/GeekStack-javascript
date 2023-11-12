let questions = [
  {
    que: "which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was javascript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "What does CSS stand for ?",
    a: "Hyper text markup",
    b: "Cascading style sheet",
    c: "Jason object notation",
    d: "None of the above",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrapper = document.querySelector(".wrapper");
let que = document.querySelector(".que");
let options = document.querySelectorAll(".options");

let loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  let data = questions[index];
  que.innerHTML = `${index + 1}) ${data.que}`;
  options[0].nextElementSibling.innerHTML = `${data.a}`;
  options[1].nextElementSibling.innerHTML = `${data.b}`;
  options[2].nextElementSibling.innerHTML = `${data.c}`;
  options[3].nextElementSibling.innerHTML = `${data.d}`;
};

loadQuestion();

let submitQuiz = () => {
  let ans = getAnswer();
  let data = questions[index];
  if (ans == data.correct) {
    right++;
  }
  index++;
  loadQuestion();
};

let getAnswer = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

let reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

let endQuiz = () => {
  wrapper.innerHTML = `Thank's for playing , you score ${right} out of ${total}`;
};
