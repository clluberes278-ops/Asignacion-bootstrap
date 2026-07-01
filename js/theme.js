const themeToggleBtn = document.getElementById('themeToggleBtn');
const savedTheme = localStorage.getItem('zzz-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function applyTheme(theme) {
  document.documentElement.dataset.bsTheme = theme;

  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro');
  }
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('zzz-theme', nextTheme);
}

applyTheme(initialTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}
