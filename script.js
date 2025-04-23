
/* Functionality viewer */

const button1 = document.getElementById('functionality-viewer-button1');
const button2 = document.getElementById('functionality-viewer-button2');
const button3 = document.getElementById('functionality-viewer-button3');

const functionality1 = document.getElementById('functionality-viewer-functionality1');
const functionality2 = document.getElementById('functionality-viewer-functionality2');
const functionality3 = document.getElementById('functionality-viewer-functionality3');

button1.addEventListener('click', () => {
    functionality1.style.display = 'block';
    functionality2.style.display = 'none';
    functionality3.style.display = 'none';
});

button2.addEventListener('click', () => {
    functionality1.style.display = 'none';
    functionality2.style.display = 'block';
    functionality3.style.display = 'none';
});

button3.addEventListener('click', () => {
    functionality1.style.display = 'none';
    functionality2.style.display = 'none';
    functionality3.style.display = 'block';
});