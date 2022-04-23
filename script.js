const toggles = document.querySelectorAll('.toggle-container > input');

const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (good.checked && cheap.checked && fast.checked) {
            if (e.target === good) {
                cheap.checked = false;
            } else if (e.target === cheap) {
                fast.checked = false;
            } else {
                good.checked = false;
            }
        }
    });
});