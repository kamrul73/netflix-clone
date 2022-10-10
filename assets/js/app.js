// *********    overlay bottom      **********
let banner = document.getElementById('banner')
let overlay = document.querySelector('.banner__overlay')
overlay.style.height = `${banner.getBoundingClientRect().height}px`

// *********** show and hide question and answer  **********
const questions = document.querySelectorAll('.question')
questions.forEach(question => {
    const qbox = question.querySelector('.qbox')
    qbox.addEventListener('click', function () {
        question.classList.toggle('show-text')
        questions.forEach(i => {
            if (i !== question) {
                i.classList.remove('show-text')
            }
        })
    })
})