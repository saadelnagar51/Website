document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // تحقق من البيانات هنا (يمكنك استخدام API)
  if (email === 'user@example.com' && password === 'password123') {
    alert('تم تسجيل الدخول بنجاح');
    window.location.href = 'dashboard.html'; // التوجيه إلى لوحة التحكم بعد تسجيل الدخول
  } else {
    alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  }
});
