document.addEventListener("DOMContentLoaded", function () {

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        bodyDontScroll = document.documentElement;


    burger.addEventListener("click", () => {
        bodyDontScroll.classList.toggle("body-scroll");
        header.classList.toggle("header--open");
        burger.classList.toggle("hamburger__active");

    })


    const swiperGallery = new Swiper(".gallery__swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
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
        item.addEventListener("mouseenter", (e) => {
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
    console.log("DOM fully loaded and parsed");
})