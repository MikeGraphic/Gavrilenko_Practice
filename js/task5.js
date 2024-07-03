let images = Array.from(document.getElementById('sliderIMG').children);
let currentImageIndex = 0;

function updateSlider() {
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');

    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });

    prevBtn.classList.toggle('disabled', currentImageIndex === 0);
    nextBtn.classList.toggle('disabled', currentImageIndex === images.length - 1);
}

function changeImage(direction) {
    let newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
        currentImageIndex = newIndex;
        updateSlider();
    }
}

document.getElementById('prevBtn').addEventListener('click', () => changeImage(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeImage(1));

updateSlider();
