const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwtjXnnOxKbysBtp6faIQki3ro3LL4APalOq7EiPIfFKy5aL-7pqZcw4Rm0G_ZZAB24VA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rsvpForm');
  const msg = document.getElementById('formMessage');
  const btn = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = 'Отправка...';
    btn.disabled = true;

    try {
      const data = new URLSearchParams(new FormData(form));
      await fetch(WEB_APP_URL, {
        method: 'POST',
        body: data.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });

      msg.textContent = 'Спасибо! Ответ отправлен.';
      form.reset();
    } catch (err) {
      msg.textContent = 'Ошибка отправки.';
    } finally {
      btn.disabled = false;
    }
  });
});