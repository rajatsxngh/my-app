// Main app logic
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('app').textContent = greet('World');

document.getElementById('footer').textContent = `Copyright \u00A9 ${new Date().getFullYear()}`;
