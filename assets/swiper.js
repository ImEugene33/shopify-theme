window.addEventListener('load', function () {
    const swiper = new Swiper(".hero--{{ section.id }}", { // Optional parameters
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        lazyLoading: true,
        keyboard: {
            enabled: true
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
});