const body = document.querySelector('body');
const toggleNightInput = document.getElementById("tooglenight");

function saveModeToLocalStorage(mode) {
    localStorage.setItem('mode', mode);
}

function loadModeFromLocalStorage() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark-mode') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadModeFromLocalStorage();

    toggleNightInput.addEventListener('change', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            saveModeToLocalStorage('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            saveModeToLocalStorage('dark-mode');
        }
    });
});