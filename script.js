const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwtjXnnOxKbysBtp6faIQki3ro3LL4APalOq7EiPIfFKy5aL-7pqZcw4Rm0G_ZZAB24VA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rsvpForm');
  const msg = document.getElementById('formMessage');
  const btn = document.getElementById('submitBtn');

  const iframe = document.createElement('iframe');
  iframe.name = 'hidden_iframe';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  form.target = 'hidden_iframe';
  form.method = 'POST';
  form.action = WEB_APP_URL;

  form.addEventListener('submit', () => {
    btn.disabled = true;
    msg.textContent = 'Отправка...';

    setTimeout(() => {
      msg.textContent = 'Спасибо! Ответ отправлен.';
      form.reset();
      btn.disabled = false;
    }, 1000);
  });
});
