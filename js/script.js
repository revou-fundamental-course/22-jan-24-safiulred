let currentSlide = 0

function showSlide(index) {
    const slides = document.getElementsByClassName('slide')

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide++

    if (currentSlide >= document.getElementsByClassName('slide').length)
        currentSlide = 0

    showSlide(currentSlide)
}

showSlide(currentSlide)

setInterval(nextSlide, 3000)