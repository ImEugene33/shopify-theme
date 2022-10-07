
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    lazyLoading: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});
