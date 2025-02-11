
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-260px" : "0px";
}

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

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

        document.getElementById("register").classList.add("hidden");
        document.getElementById("login").classList.add("hidden");
        document.getElementById("sidebar").classList.remove("hidden");

        localStorage.setItem("loggedInUser", email);
    } else {
        alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        document.getElementById("register").classList.add("hidden");
        document.getElementById("login").classList.add("hidden");
        document.getElementById("sidebar").classList.remove("hidden");
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("🚪 تم تسجيل الخروج!");
    location.reload();
}
