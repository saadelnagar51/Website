document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

(function() {
    emailjs.init("MTf_P8NaYf92ptUes");
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var templateParams = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        message: document.getElementById("userMessage").value
    };

    emailjs.send("service_xuq2bvm", "template_lb7vrzp", templateParams)
    .then(function(response) {
        alert("✅ تم إرسال البريد بنجاح!");
    }, function(error) {
        alert("❌ حدث خطأ أثناء الإرسال!");
    });
});
