import { Swiper } from "swiper";
import { Pagination, Mousewheel, Autoplay, Keyboard, Navigation } from 'swiper/modules';

window.addEventListener("DOMContentLoaded", () => {

    const postsSliderConfig = {
        modules: [Pagination, Mousewheel],
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    }
    const workSliderConfig = {
        modules: [Pagination, Autoplay, Keyboard, Navigation],
        centeredSlides: true,
        slidesPerView: 1,
        grabCursor: true,
        freeMode: false,
        loop: true,
        mousewheel: false,
        keyboard: {
            enabled: true
        },
        // onhover stop autoplay
        on: {
            mouseenter: function () {
                console.log("stop");
                this.autoplay.stop();
            },
            mouseleave: function () {
                console.log("start");
                this.autoplay.start();
            }
        },

        // Enabled autoplay mode
        autoplay: {
            delay: 15000,
            disableOnInteraction: false
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
            clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1.25,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    }

    initializeSwiper(".work-slider", workSliderConfig);
    initializeSwiper(".whyUsCards", postsSliderConfig);

});

function initializeSwiper(selector, config) {
    new Swiper(selector, config);
}
