const button1 = document.querySelector(".q1 button");
const button2 = document.querySelector(".q2 button");
const button3 = document.querySelector(".q3 button");
const answers = document.querySelectorAll(".faq-answers-container .faq-answer");

// Funciones reutilizables
const hideAllAnswers = () => { 
  answers.forEach((answer) => {
    answer.classList.add("hidden");
  });  
}

const showAnswerFor = (id) => {
  const answer = document.querySelector(id);
  answer.classList.remove("hidden");
}

// Eventos
button1.addEventListener("click", () => {
  hideAllAnswers();
  showAnswerFor("#q1");
});

button2.addEventListener("click", () => {
  hideAllAnswers();
  showAnswerFor("#q2");
});

button3.addEventListener("click", () => {
  hideAllAnswers();
  showAnswerFor("#q3");
});