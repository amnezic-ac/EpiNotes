// Add an remove dark-mode class to the body based on the user's preference
function applyMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Check if the user has a preference saved
const savedMode = localStorage.getItem('mode');
if (savedMode) {
    applyMode(savedMode);
} else {
    // If no preference is saved, check the OS preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyMode(prefersDarkScheme ? 'dark' : 'light');
}

// Listen for changes in the OS theme preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    applyMode(event.matches ? 'dark' : 'light');
});
