document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // يمكنك استبدال هذا بالتحقق الفعلي باستخدام API أو قاعدة بيانات
  if (username && email && password) {
    alert('تم إنشاء الحساب بنجاح');
    // يتم توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل
    window.location.href = 'login.html';
  } else {
    alert('الرجاء إدخال جميع البيانات المطلوبة');
  }
});
