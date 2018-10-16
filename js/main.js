$(document).ready(function () {

    // Menu Function
    $('.nav-button').click(() => {
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open');
        return false;
    });

    $('#fullpage').fullpage({
        css3: true,
        autoScrolling: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        fitToSection: true,
        scrollOverflow: true,
        scrollBar: false,
        keyboardScrolling: true,
        normalScrollElements: '.side-nav',
        onLeave: function (origin, destination, direction) {
            if (destination.index == 0) {
                $('.nav-button').removeClass('black');
            } else {
                $('.nav-button').addClass('black');
            }
        }
    });
});

function openModal() {
    $('.nav-button').click();
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}