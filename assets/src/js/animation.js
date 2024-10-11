import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);



// select all elements
const postItems = document.querySelectorAll('.grid-item');
const postItemsArray = Array.from(postItems);
const pricingCards = document.querySelectorAll('.pricing-card');
const teamsCards = document.querySelectorAll('.team');
const wpBlockCover = document.querySelectorAll('.wp-block-cover');
const wpBlockImages = document.querySelectorAll('.wp-block-image');
const wcBlockGridProduct = document.querySelectorAll('.wc-block-grid__product');
const wcBlockFeaturedProductTitle = document.querySelectorAll('.wc-block-featured-product__title');
const wcBlockFeaturedProductDescription = document.querySelectorAll('.wc-block-featured-product__description');
const wcBlockFeaturedProductPrice = document.querySelectorAll('.wc-block-featured-product__price');
const wcBlockFeaturedProductLink = document.querySelectorAll('.wc-block-featured-product__link');
const aboutSection = document.querySelectorAll('.about-section .wrapper');
//const galleryshowCases = document.querySelectorAll('.galleryshow .swiper-slide');
const pageBannerContent = document.querySelectorAll('.page-banner__content > *');
const slideshowSlider = document.querySelectorAll('.slideshow-section .slideshow .swiper-wrapper .swiper-slide .content > div > *');
const dchProductsArchiveHeaderBackgroundWrapper = document.querySelectorAll('.dch-products-archive-header-background-wrapper > *');
const shopTitle = document.querySelectorAll('.dch-shop-title');
const ategoryNavigation = document.querySelectorAll('.dch-category-navigation > *');
const woocommerceShopProduct = document.querySelectorAll('.woocommerce-shop .products .product');




export function cursor() {
    document.body.addEventListener("mousemove", evt => {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;
        const cursor1 = document.querySelector(".cursor1");
        const cursor2 = document.querySelector(".cursor2");
        if (cursor1 && cursor2) {


        let tl = gsap.timeline({
            defaults: {
                x: mouseX,
                y: mouseY,
            },
        });

        tl.to(".cursor1", {
            ease: "power2.out",
        }).to(
            ".cursor2",
            {
                ease: "power2.out",
            },
            "-=0.4"
        );
    }
    })
}


export function animateCardAndElements(elements, duration = 1) {
    gsap.utils.toArray(elements).forEach((element, index) => {
        // scrollTrigger animation
        ScrollTrigger.create({
            trigger: element,
            // markers:true,
            start: 'top 70%',
            end: 'bottom 20%',
            animation: gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    delay: 0.1 * index
                }
            ),
        });
    });
}
export function animateCardLeft(elements, duration = 1) {
    gsap.utils.toArray(elements).forEach((element, index) => {
        // scrollTrigger animation
        ScrollTrigger.create({
            trigger: element,
            // markers:true,
            start: 'top 70%',
            end: 'bottom 20%',
            animation: gsap.fromTo(
                element,
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: duration,
                    delay: 0.1 * index
                }
            ),
        });
    });
}
export function animateCardRight(elements, duration = 1) {
    gsap.utils.toArray(elements).forEach((element, index) => {
        // scrollTrigger animation
        ScrollTrigger.create({
            trigger: element,
            // markers:true,
            start: 'top 70%',
            end: 'bottom 20%',
            animation: gsap.fromTo(
                element,
                {
                    opacity: 0,
                    x: -50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: duration,
                    delay: 0.1 * index
                }
            ),
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cursor();

    
    if (postItemsArray) {
        animateCardAndElements(postItemsArray);
    }
    if (pricingCards) {
        animateCardAndElements(pricingCards);
    }
    if (teamsCards) {
        animateCardAndElements(teamsCards);
    }
    if (wpBlockCover) {
        animateCardAndElements(wpBlockCover);
    }
    if (wpBlockImages) {
        animateCardAndElements(wpBlockImages);
    }
    if (wcBlockGridProduct) {
        animateCardAndElements(wcBlockGridProduct);
    }
    if (wcBlockFeaturedProductTitle) {
        animateCardAndElements(wcBlockFeaturedProductTitle);
    }
    if (wcBlockFeaturedProductDescription) {
        animateCardAndElements(wcBlockFeaturedProductDescription);
    }
    if (wcBlockFeaturedProductPrice) {
        animateCardAndElements(wcBlockFeaturedProductPrice);
    }
    if (wcBlockFeaturedProductLink) {
        animateCardAndElements(wcBlockFeaturedProductLink);
    }
    
    if (aboutSection) {
        animateCardAndElements(aboutSection);
    }
  
    if (pageBannerContent) {
        animateCardAndElements(pageBannerContent);
    }
    if (slideshowSlider) {
        animateCardAndElements(slideshowSlider);
    }
    if (dchProductsArchiveHeaderBackgroundWrapper) {
        animateCardAndElements(dchProductsArchiveHeaderBackgroundWrapper);
    }
    if (shopTitle) {
        animateCardAndElements(shopTitle);
    }
    if (ategoryNavigation) {
        animateCardAndElements(ategoryNavigation);
    }
    if (woocommerceShopProduct) {
        animateCardAndElements(woocommerceShopProduct);
    }

    const fancyAboutHeading = document.querySelector('.fancy-about .content-wrapper');
    if (fancyAboutHeading) {
        animateCardLeft(fancyAboutHeading,1.5);
    }
    const fancyImageWrapper = document.querySelector('.fancy-about .image-wrapper');
    if (fancyImageWrapper) {
        animateCardRight(fancyImageWrapper, 2);
    }

});
