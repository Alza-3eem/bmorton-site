document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay')
    const closebtn = document.querySelector('.closebtn')
    const body = document.querySelector('body')

    hamburger.addEventListener('click', function() {
        overlay.style.display = 'flex';
        body.classList.add('no-scroll')
        hamburger.style.display = 'none';
    })

    closebtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        body.classList.remove('no-scroll');
        hamburger.style.display = 'block';
    })
});