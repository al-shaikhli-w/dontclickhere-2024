import { Swiper } from "swiper";
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

window.addEventListener("DOMContentLoaded", () => {
    const postsSliderConfig = {
        modules: [Navigation, Autoplay, EffectFade],
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // loop: true,
        slidesPerView: 1,
        // spaceBetween: 30,
        // breakpoints: {
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 0,
        //     },
        //     1200: {
        //         slidesPerView: 3,
        //         spaceBetween: 0,
        //     },
        //     1400: {
        //         slidesPerView: 4,
        //         spaceBetween: 0,
        //     },
        // }
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    };

    initializeSwiper(".whyUsCards", postsSliderConfig);

});

function initializeSwiper(selector, config) {
    new Swiper(selector, config);
}