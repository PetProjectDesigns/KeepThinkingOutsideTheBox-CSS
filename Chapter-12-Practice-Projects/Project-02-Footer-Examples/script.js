// === JAVASCRIPT FOR DARK MODE ===
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check for stored preference or default to system preference
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to apply the theme
function applyTheme(isDark) {
    if (isDark) {
body.classList.add('dark-mode');
toggleButton.textContent = 'Toggle Light Mode ☀️';
localStorage.setItem('theme', 'dark');
    } else {
body.classList.remove('dark-mode');
toggleButton.textContent = 'Toggle Dark Mode 🌙';
localStorage.setItem('theme', 'light');
    }
}

// Apply theme on load
if (storedTheme === 'dark' || (storedTheme === null && systemPrefersDark)) {
    applyTheme(true);
} else {
    applyTheme(false);
}

// 2. Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    applyTheme(!isDarkMode);
});