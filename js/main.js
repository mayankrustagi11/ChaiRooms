$(document).ready(function () {

    // Menu Function
    $('.nav-button').click(() => {
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open');
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
    document.getElementById('Gallery').style.display = "block";
}

function closeModal() {
    document.getElementById('Gallery').style.display = "none";
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
}

const form = document.querySelector('#contact-form');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

form.onsubmit = (e) => {

    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;


    if (message == '' || email == '' || name == '') {
        if (name == '') {
            nameError.textContent = "Please enter a name";
        }

        if (email == '') {
            emailError.textContent = "Please enter an email";
        }

        if (message == '') {
            messageError.textContent = "Please enter a message";
        }

        return;
    }

    form.submit();
}

var contactModal = document.querySelector('#contactModal');
var contactModalButton = document.querySelector("#contactModalToggle");
var contactModalClose = document.querySelector("#contactModalClose");

contactModalButton.onclick = () => {
    $('.nav-button').click();
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    contactModal.style.display = "block";
}

contactModalClose.onclick = () => {
    contactModal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == contactModal) {
        contactModal.style.display = "none";
    }
}

var aboutModal = document.querySelector('#aboutModal');
var aboutModalButton = document.querySelector("#aboutModalToggle");
var aboutModalClose = document.querySelector("#aboutModalClose");

aboutModalButton.onclick = () => {
    $('.nav-button').click();
    aboutModal.style.display = "block";
}

aboutModalClose.onclick = () => {
    aboutModal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}