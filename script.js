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

    // Scroll Animation
    const elements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight) {
                element.classList.add('fade-in-visible');
            }
        });
    });
});

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    if (name == "" || email == "") {
        alert("الرجاء ملء جميع الحقول.");
        return false;
    }
}
