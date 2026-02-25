// Main app logic
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('app').textContent = greet('World');

// Counter
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
