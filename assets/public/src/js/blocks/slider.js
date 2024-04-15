import { Swiper } from "swiper";
import { Pagination, Mousewheel } from 'swiper/modules';

window.addEventListener("DOMContentLoaded", () => {
    const postsSliderConfig = {
        modules: [Pagination, Mousewheel],
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            }
        },
    }

    initializeSwiper(".whyUsCards", postsSliderConfig);

});

function initializeSwiper(selector, config) {
    new Swiper(selector, config);
}