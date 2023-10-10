const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const projectSections = document.querySelectorAll('.slider section');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = projectSections.length - 1;
    } else if (index >= projectSections.length) {
        currentIndex = 0;
    }

    projectSections.forEach((section, idx) => {
        if (idx === currentIndex) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });

}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentIndex);

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});
