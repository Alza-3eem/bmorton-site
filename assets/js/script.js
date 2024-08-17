document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay')
    const closebtn = document.querySelector('.closebtn')
    const body = document.querySelector('body')
    const pageContent = document.querySelector('.page-content');
    const navLinks = document.querySelectorAll('a');

    hamburger.addEventListener('click', function() {
        overlay.style.display = 'flex';
        body.classList.add('no-scroll')
        hamburger.style.display = 'none';
    });

    closebtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        body.classList.remove('no-scroll');
        hamburger.style.display = 'block';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            pageContent.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });

    pageContent.classList.add('fade-in');
})