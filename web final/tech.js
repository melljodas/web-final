const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'light-mode' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    
    themeToggle.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    themeToggle.classList.add('fade');
    setTimeout(() => {
        themeToggle.classList.remove('fade');
    }, 300);
});
