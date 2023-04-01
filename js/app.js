// Mibile Navbar
const hamburger = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Sliders
$(document).ready(function () {
    $('.servicios__list').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ],
    });

    $('.bienvenida__content').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear'
    });
    $('.backgrounds').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
});
