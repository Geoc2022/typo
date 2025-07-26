const root = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  root.classList.remove('light', 'dark');
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.add('light');
  }
}

function initTheme() {
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

initTheme();

if (!storedTheme) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
}

themeToggleBtn.addEventListener('click', () => {
  const current = root.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});
