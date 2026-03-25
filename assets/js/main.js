// Dark mode toggle for ICSOB 2026
//
// This module runs after conference.bundle.js, which calls darkmode.init()
// and sets data-bs-theme based on system preference. We re-apply the saved
// localStorage preference here (top-level, before DOMContentLoaded) to override it.

const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
}

function updateIcon(theme) {
  const icon = document.getElementById('dark-toggle-icon');
  if (icon) {
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
  updateIcon(theme);
}

// Re-apply immediately at module level, overriding conference.bundle.js's init()
applyTheme(localStorage.getItem(STORAGE_KEY) || 'light');

// Also override the system-preference change listener from conference.bundle.js
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  // Only follow system preference if the user has no saved choice
  if (!localStorage.getItem(STORAGE_KEY)) {
    applyTheme('light');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const theme = document.documentElement.getAttribute('data-bs-theme') || 'light';
  updateIcon(theme);

  const btn = document.getElementById('dark-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-bs-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
});
