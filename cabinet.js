// script.js — JS-файл на GitHub Pages

const urlParams = new URLSearchParams(window.location.search);
const auth = urlParams.get('auth');
const container = document.getElementById('container');

if (!auth) {
  container.innerHTML = '<h1>⛔ Нет токена доступа</h1>';
} else {
  fetch(`https://script.google.com/macros/s/ВАШ_DEPLOY_URL/exec?auth=${auth}`)
    .then(res => res.json())
    .then(data => {
      if (data.allowed) {
        container.innerHTML = `<h1>👋 Добро пожаловать, ${data.name}!</h1>`;
      } else {
        container.innerHTML = '<h1>⛔ Доступ запрещён</h1>';
      }
    })
    .catch(() => {
      container.innerHTML = '<h1>⚠️ Ошибка при проверке доступа</h1>';
    });
}
