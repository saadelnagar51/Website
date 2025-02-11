document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 الموقع جاهز!");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        console.log("📩 رسالة جديدة من:", name, "Email:", email, "Message:", message);

        alert("تم إرسال الرسالة بنجاح!");
        document.getElementById("contactForm").reset();
    });
});