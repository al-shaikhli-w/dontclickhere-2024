import { Swiper } from "swiper";
import { Navigation, EffectFade, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import 'fslightbox';
import Splitting from 'splitting';

window.addEventListener("DOMContentLoaded", () => {
    const galleryshow = document.querySelector(".galleryshow");
    if (galleryshow) {
        const mainSliderConfig = {
            modules: [Navigation, EffectFade, Autoplay, Keyboard],
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            navigation: {
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
            },
            centeredSlides: true,
            effect: "slide",
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        };
        initializeSwiper(".galleryshow", mainSliderConfig);
    }
    const galleryImages = document.querySelectorAll(".wp-block-gallery a");
    galleryImages.forEach((image) => {
        image.setAttribute("data-fslightbox", "gallery");
        image.dataset.fslightbox = "gallery";
    });

    const slideshows = document.querySelectorAll(".slideshow");
    if (slideshows) {
        const slideshowConfig = {
            modules: [Navigation, EffectFade, Autoplay, Keyboard, Pagination],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<span class="zero">0 </span>' + (index + 1) + "</span>";
                },
            },
        };
        const testimonialsSlider = document.querySelector(".testimonials-slider");
        if (testimonialsSlider) {
            const testimonialsSlides = testimonialsSlider.querySelectorAll(".testimonial").length;
            const testimonialsSliderConfig = {
                modules: [Navigation, EffectFade, Autoplay, Keyboard],
                slidesPerView: testimonialsSlides - 1,
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                },
            };
            initializeSwiper(testimonialsSlider, testimonialsSliderConfig);
        }

        if (slideshows.length > 1) {
            slideshows.forEach((slideshow, index) => {
                slideshow.classList.add(`slideshow-${index}`);
                initializeSwiper(`.slideshow-${index}`, slideshowConfig);
            });
        } else {
            initializeSwiper(slideshows[0], slideshowConfig);
        }
    }

    const teamSilder = document.querySelector(".team-slider");
    if (teamSilder) {
        const teamSlides = teamSilder.querySelectorAll(".team").length;
        const teamSliderConfig = {
            modules: [Navigation, EffectFade, Autoplay, Keyboard],
            slidesPerView: teamSlides - 1,
            spaceBetween: 30,
            navigation: {
                nextEl: ".team-button-next",
                prevEl: ".team-button-prev",
            },
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                612: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                882: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        };
        initializeSwiper(teamSilder, teamSliderConfig);
    }

    const customer_feedbackSilder = document.querySelector(".customer_feedback-slider");
    if (customer_feedbackSilder) {
        const customer_feedbackSliderConfig = {
            modules: [Navigation, EffectFade],
            sliderPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: ".customer_feedback-button-next",
                prevEl: ".customer_feedback-button-prev",
            },
            effect: "fade",
            loop: true,
        };
        initializeSwiper(customer_feedbackSilder, customer_feedbackSliderConfig);
    }


    const blogSliders = document.querySelectorAll(".blog-slider");
    if (blogSliders) {
        blogSliders.forEach((blogSlider) => {
            initializeSwiper(blogSlider, {
                modules: [Navigation, EffectFade, Autoplay, Keyboard, Pagination],
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false
                },
                on: {
                    // set class to slide for active slide
                    slideChangeTransitionStart: function () {
                        const activeSlide = blogSlider.querySelector(".swiper-slide-active");
                        if (activeSlide) {
                            const slides = blogSlider.querySelectorAll(".swiper-slide");
                            slides.forEach((slide) => {
                                let sliderHeading = slide.querySelector(".title");
                                if (sliderHeading) {
                                    if (sliderHeading.hasAttribute("data-splitting")) {
                                        Splitting({ target: sliderHeading });
                                    }
                                }
                            });
                            const sliderHeading = activeSlide.querySelector(".title");
                            if (sliderHeading) {
                                if (sliderHeading.hasAttribute("data-splitting")) {
                                    Splitting({ target: sliderHeading });
                                    sliderHeading.setAttribute("data-splitting", "");
                                    sliderHeading.setAttribute("data-scroll", "in");
                                }
                            }
                        }
                    }
                },
                parallax: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                },
                pagination: {
                    el: ".blog-pagination",
                    clickable: true,
                },
                navigation:{
                    nextEl: ".blog-button-next",
                    prevEl: ".blog-button-prev",
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                },
            });
        });
    }


// .customer_feedback-slider-three-items
const customerFeedbackSliderThreeItems = document.querySelector(".customer_feedback-slider-three-items");
if (customerFeedbackSliderThreeItems) {
    const customerFeedbackSliderThreeItemsConfig = {
        modules: [Navigation, EffectFade, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".customer_feedback-button-next",
            prevEl: ".customer_feedback-button-prev",
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    };
    initializeSwiper(customerFeedbackSliderThreeItems, customerFeedbackSliderThreeItemsConfig);
}

});

function initializeSwiper(selector, config) {
    new Swiper(selector, config);
}
