// Main app logic
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('app').textContent = greet('World');

// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
