/* Functionality viewer */

const buttons = document.querySelectorAll('.functionality-viewer-button');
const functionalities = document.querySelectorAll('.functionality-viewer-functionality');

functionalities[0].style.display = 'block';

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        functionalities.forEach((func, funcIndex) => {
            func.style.display = index === funcIndex ? 'block' : 'none';
        });
    });
});

/* Go up button */

const goUpButton = document.querySelector('.goUpButton');

const toggleGoUpButton = () => {
    if (window.scrollY < 500) {
        goUpButton.style.display = 'none';
    } else {
        goUpButton.style.display = 'block';
    }
};

window.addEventListener('scroll', toggleGoUpButton);
toggleGoUpButton();


/* Faq */

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