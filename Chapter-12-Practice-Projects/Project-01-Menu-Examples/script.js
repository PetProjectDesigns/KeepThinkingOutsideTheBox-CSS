// --- JAVASCRIPT FOR THEME TOGGLE (Page-wide and Nav 5) ---
function toggleTheme() {
    const body = document.getElementById('body');
    const pageButton = document.getElementById('page-theme-toggle');
    const nav5Button = document.getElementById('nav-5-theme-toggle');

    // 1. Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // 2. Update page button text and Nav 5 button text
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
// If now in Dark Mode, show the Sun icon (to switch to Light Mode)
pageButton.textContent = '☀️';
    } else {
// If now in Light Mode, show the Moon icon (to switch to Dark Mode)
pageButton.textContent = '🌙';
    }
    
    // 3. Update Nav 5 button icon if it exists (for the functional bar)
    if (nav5Button) {
 if (isDarkMode) {
    // If now in Dark Mode, show the Sun icon
    nav5Button.textContent = '☀️';
} else {
    // If now in Light Mode, show the Moon icon
    nav5Button.textContent = '🌙';
}
    }
}

// Initialize theme based on preference or default to light
document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body');
    const pageButton = document.getElementById('page-theme-toggle');
    const nav5Button = document.getElementById('nav-5-theme-toggle');

    // Check if dark mode is active (based on CSS class)
    const isDarkMode = body.classList.contains('dark-mode');

    // Initialize global button text
    if (isDarkMode) {
// In Dark Mode, button suggests switching to Light Mode
pageButton.textContent = '☀️';
    } else {
// In Light Mode, button suggests switching to Dark Mode
pageButton.textContent = '🌙';
    }
    
    // Initialize Nav 5 icon
    if (nav5Button) {
 if (isDarkMode) {
    // In Dark Mode, button suggests switching to Light Mode
    nav5Button.textContent = '☀️';
} else {
    // In Light Mode, button suggests switching to Dark Mode
    nav5Button.textContent = '🌙';
}
    }
});


// --- JAVASCRIPT FOR STANDARD RESPONSIVE TOGGLE
function toggleMenu(navId) {
    const nav = document.getElementById(navId);
    // Toggle the 'open' class to show/hide the links (handled by CSS media query)
    nav.classList.toggle('open');
}


// --- JAVASCRIPT FOR FULL SCREEN OVERLAY (Nav 5) ---
function openNav(overlayId) {
    // Set the width to 100% to slide the overlay open (CSS transition handles the animation)
    document.getElementById(overlayId).style.width = "100%";
}

function closeNav(overlayId) {
    // Set the width back to 0 to slide the overlay closed
    document.getElementById(overlayId).style.width = "0%";
}