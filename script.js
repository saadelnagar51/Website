let currentIndex = 0;

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;
    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
