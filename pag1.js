document.addEventListener('DOMContentLoaded', () => {
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;

    if (scrollPos > 300) { 
        document.getElementById('scroll-to-top').style.display = 'block';
    } else {
        document.getElementById('scroll-to-top').style.display = 'none';
    }
});