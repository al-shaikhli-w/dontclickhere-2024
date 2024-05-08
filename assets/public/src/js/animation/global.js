import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    //start global animation
    // 
    const scrollFromLeft = document.querySelectorAll(".scrollFromLeft");
    if (scrollFromLeft) {
        scrollFromLeft.forEach((scroll) => {
            gsap.set(scroll, {
                opacity: 0,
                x: -50,
            });
            ScrollTrigger.create({
                trigger: scroll,
                start: "top bottom-=150",
                onEnter: () => {
                    gsap.to(scroll, {
                        duration: 1,
                        delay: 0.2,
                        opacity: 1,
                        x: 0,
                        ease: "expo.inOut",
                    });
                },
            });
        });
    }
    const scrollFromRight = document.querySelectorAll(".scrollFromRight");
    if (scrollFromRight) {
        scrollFromRight.forEach((scroll) => {
            gsap.set(scroll, {
                opacity: 0,
                x: 50,
            });
            ScrollTrigger.create({
                trigger: scroll,
                start: "top bottom-=150",
                onEnter: () => {
                    gsap.to(scroll, {
                        duration: 1,
                        delay: 0.2,
                        opacity: 1,
                        x: 0,
                        ease: "expo.inOut",
                    });
                },
            });
        });
    }
    const scrollFromTop = document.querySelectorAll(".scrollFromTop");
    if (scrollFromTop) {
        scrollFromTop.forEach((scroll) => {
            gsap.set(scroll, {
                opacity: 0,
                y: -50,
            });
            ScrollTrigger.create({
                trigger: scroll,
                start: "top bottom-=150",
                onEnter: () => {
                    gsap.to(scroll, {
                        duration: 1,
                        delay: 0.2,
                        opacity: 1,
                        y: 0,
                        ease: "expo.inOut",
                    });
                },
            });
        });
    }
    const scrollFromBottom = document.querySelectorAll(".scrollFromBottom");
    if (scrollFromBottom) {
        scrollFromBottom.forEach((scroll) => {
            gsap.set(scroll, {
                opacity: 0,
                y: 50,
            });
            ScrollTrigger.create({
                trigger: scroll,
                start: "top bottom-=150",
                onEnter: () => {
                    gsap.to(scroll, {
                        duration: 1,
                        delay: 0.2,
                        opacity: 1,
                        y: 0,
                        ease: "expo.inOut",
                    });
                },
            });
        });
    }
    const pricingCards = document.querySelectorAll(".pricing-card");
    if (!pricingCards) return;
    pricingCards.forEach((pricingCard, index) => {
        gsap.set(pricingCard, {
            opacity: 0,
            y: 50,
        });
        ScrollTrigger.create({
            trigger: pricingCard,
            start: "top bottom-=150",

            onEnter: () => {
                gsap.to(pricingCard, {
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                    opacity: 1,
                    y: 0,
                    ease: "expo.inOut",
                });
            },
        });
    }
    );
});