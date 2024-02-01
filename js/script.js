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

function buttomSubmit(e) {
    const inputElements = document.querySelectorAll('.input-data')

    // Validation input
    let result = true
    inputElements.forEach((el, i) => {
        if (el.value === '') {
            el.classList.add('error')
            result = false
        }
        else el.classList.remove('error')
    })

    if (result) {
        alert('Data berhasil dikirim')
        buttonClear() // reset form
    }
}

function buttonClear() {
    const inputElements = document.querySelectorAll('.input-data')

    inputElements.forEach(el => {
        el.value = ''
        el.classList.remove('error')
    })
}