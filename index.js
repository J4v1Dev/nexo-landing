const button1 = document.querySelector(".q1 button");
const button2 = document.querySelector(".q2 button");
const button3 = document.querySelector(".q3 button");
const images = document.querySelectorAll(".faq-answers-container img");

// Funciones reutilizables
const hideAllImages = () => { 
  images.forEach((image) => {
    image.classList.add("hidden");
  });  
}

const showImageFor = (id) => {
  const image = document.querySelector(id);
  image.classList.remove("hidden");
}

// Eventos
button1.addEventListener("click", () => {
  hideAllImages();
  showImageFor("#q1");
})

button2.addEventListener("click", () => {
  hideAllImages();
  showImageFor("#q2");
});

button3.addEventListener("click", () => {
  hideAllImages();
  showImageFor("#q3");
});