const swiper = new Swiper('.card-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    accessibility: {
        enabled: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        380: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
        1200: { slidesPerView: 4, spaceBetween: 0 },
    },
});

const swiper1 = new Swiper('.event-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    accessibility: {
        enabled: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        480: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 1, spaceBetween: 30 },
        1024: { slidesPerView: 1, spaceBetween: 30 },
    },
});