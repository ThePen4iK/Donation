document.addEventListener("DOMContentLoaded", function () {

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        bodyDontScroll = document.documentElement,
        menuitem = document.querySelectorAll(".menu__item"),
        headerBtn = document.querySelector(".btn__header"),
        menuFlag = false,
        startScreen = document.querySelector('.js-start'),
        headerFixed = startScreen.offsetHeight;


    window.onscroll = function () {
        fixed();
    }

    function fixed() {
        //&& window.pageYOffset >= headerFixed
        if (window.scrollY > 0) {
            header.classList.add("header__fixed");
        } else {
            header.classList.remove("header__fixed");
        }
    }


    if (burger) {
        burger.addEventListener("click", () => {
            if (!menuFlag) {
                bodyDontScroll.classList.add("body-scroll");
                header.classList.add("header--open");
                burger.classList.add("hamburger__active");
                menuFlag = true;
            } else {
                bodyDontScroll.classList.remove("body-scroll");
                header.classList.remove("header--open");
                burger.classList.remove("hamburger__active");
                menuFlag = false;
            }
        })

        headerBtn.addEventListener("click", () => {
            bodyDontScroll.classList.remove("body-scroll");
            header.classList.remove("header--open");
            burger.classList.remove("hamburger__active");
            menuFlag = false;
        });
    }
    ;
    menuitem.forEach((item) => {
        item.addEventListener("click", () => {
            bodyDontScroll.classList.remove("body-scroll");
            header.classList.remove("header--open");
            burger.classList.remove("hamburger__active");
            menuFlag = false;
        });
    });


    const swiperGallery = new Swiper(".gallery__swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
    })

    let galleryVideo = document.querySelectorAll(".gallery__wrap"),
        videoPlay = document.querySelectorAll(".gallery__slide-video"),
        galleryDecor = document.querySelectorAll(".gallery__decor");


    galleryVideo.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            galleryDecor[i].style.display = 'none';
            videoPlay[i].play();
        });
        item.addEventListener("mouseleave", (e) => {
            if (!e.target.classList.contains("gallery__slide-video")) {
                galleryDecor[i].style.display = 'block';
                videoPlay[i].load();
            }
        });
    })


    window.scrollSmooth = (container = document) => {
        const hrefAttributes = container.querySelectorAll("a[href*='#']");
        hrefAttributes.forEach((item) => {
            const href = item.href.split('#');

            const CURRENT_URL = window.location.origin + window.location.pathname;

            if (href[0] === CURRENT_URL) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    const scrollTarget = document.getElementById(href[1]);

                    const topOffset = 10;
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset;

                    window.scrollBy({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                });
            }
        });
    };

    window.scrollSmooth();
    console.log("DOM fully loaded and parsed");
})