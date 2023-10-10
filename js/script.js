const toggleNightInput = document.getElementById("tooglenight");
const queryString = window.location.search;
const errorSpan = document.getElementById('error');
const successSpan = document.getElementById('success');

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

    const cleanQueryString = queryString.substring(1);
    const queryParams = cleanQueryString.split('&');
    const params = {};
    for (let i = 0; i < queryParams.length; i++) {
        const param = queryParams[i].split('=');
        const key = decodeURIComponent(param[0]);
        const value = decodeURIComponent(param[1]);
        params[key] = value;
    }

    const error = params.error;
    const success = params.success;

    if (typeof error !== 'undefined' && error !== null) 
    {
        errorSpan.textContent = error;
    } 

    if (typeof success !== 'undefined' && success !== null) 
    {
        successSpan.textContent = success;
    } 


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