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