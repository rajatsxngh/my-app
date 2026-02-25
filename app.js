// Main app logic
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('app').textContent = greet('World');

// Dark mode toggle (Issue #1)
const toggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Counter (Issue #4)
let count = 0;
const countDisplay = document.getElementById('count');
document.getElementById('decrement').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});
document.getElementById('increment').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// Footer copyright (Issue #3)
document.getElementById('footer').textContent = `Copyright \u00A9 ${new Date().getFullYear()}`;
