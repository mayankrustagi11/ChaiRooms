$(document).ready(function () {

    // Menu Function
    $('.nav-button').click(function () {
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open');
        return false;
    });

    // Food Menu function
    $('.nav-link.the-menu').click(function () {
        $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
        $('.menu-container').addClass('displayed');
        return false;
    });

    // closing the menu-overlay
    $('.close, .menu-container').click(function () {
        $('.menu-container').removeClass('displayed');
        return false;
    });
    // preventing clicks on the menu closing it for now because there is nothing inside yet.
    $('.tab.menu-tab').click(function () {
        return false;
    });

    $(function () {
        $.scrollify({
            section: ".section",
            easing: "easeOutExpo",
            scrollSpeed: 2000,
            offset: 0,
            scrollbars: false,
            target: "html,body",
            standardScrollElements: true,
            setHeights: true,
            overflowScroll: true,
            updateHash: false,
            touchScroll: true,
        });
    });

    // Window scroll function
    $(window).scroll(function () {

        if ($(window).scrollTop() > 600) {
            $('.nav-button, .search-button').addClass('black');
        } else {
            $('.nav-button, .search-button').removeClass('black');
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