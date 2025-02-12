
let currentIndex = 0;

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Form validation before submitting
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    if (name == "" || email == "") {
        alert("يرجى ملء جميع الحقول!");
        return false;
    }
    return true;
}

// Carousel functionality
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
