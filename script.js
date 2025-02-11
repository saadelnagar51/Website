function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (name && email && password) {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert("✅ تم إنشاء الحساب بنجاح!");
    } else {
        alert("❌ يرجى ملء جميع الحقول!");
    }
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert("✅ تم تسجيل الدخول بنجاح، مرحبًا " + userData.name + "!");
    } else {
        alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }
}
