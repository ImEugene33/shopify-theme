
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    lazyLoading: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        dynamicBullets: true,
    },
});
