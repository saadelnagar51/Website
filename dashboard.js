document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = 'login.html'; // إذا لم يكن هناك توكن، يتم إعادة التوجيه إلى صفحة تسجيل الدخول
  }

  // استعراض الصفقات الحالية
  fetch('http://localhost:5000/trades', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(trades => {
    const tradesTable = document.getElementById('tradesTable').getElementsByTagName('tbody')[0];
    trades.forEach(trade => {
      const row = tradesTable.insertRow();
      row.innerHTML = `
        <td>${trade.pair}</td>
        <td>${trade.type}</td>
        <td>${trade.size}</td>
        <td>${new Date(trade.date).toLocaleString()}</td>
        <td><button class="delete-btn" data-id="${trade._id}">حذف</button></td>
      `;
    });

    // رسم بياني للصفقات
    const ctx = document.getElementById('tradeChart').getContext('2d');
    const tradeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: trades.map(trade => new Date(trade.date).toLocaleTimeString()),
        datasets: [{
          label: 'حجم الصفقة',
          data: trades.map(trade => trade.size),
          borderColor: 'rgb(75, 192, 192)',
          fill: false
        }]
      }
    });
  })
  .catch(err => console.log(err));

  // إضافة صفقة جديدة
  document.getElementById('addTradeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const pair = document.getElementById('pair').value;
    const size = document.getElementById('size').value;
    const type = document.getElementById('type').value;

    fetch('http://localhost:5000/trades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ pair, size, type })
    })
    .then(response => response.json())
    .then(newTrade => {
      alert('تم إضافة الصفقة بنجاح');
      window.location.reload(); // إعادة تحميل الصفحة لعرض الصفقة الجديدة
    })
    .catch(err => console.log(err));
  });

  // تسجيل الخروج
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
  });
});
