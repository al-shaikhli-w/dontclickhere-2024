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
    function cursor() {
        document.body.addEventListener("mousemove", evt => {
            const mouseX = evt.clientX;
            const mouseY = evt.clientY;
    
            let tl = gsap.timeline({
                defaults: {
                    x: mouseX,
                    y: mouseY,
                },
            });
            tl.to(".cursor", {
                duration: 0.3,
                scale: 1,
            });
        })
        // add class on mouseenter and remove on mouseleave
        const cursor = document.querySelector(".cursor");
        const links = document.querySelectorAll("a");
        const button = document.querySelectorAll("button");
        const h2 = document.querySelectorAll("h2");
        const whyUsCards = document.querySelector(".whyUsCards");
        
        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                cursor.classList.add("active");
            });
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
        });
        button.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                cursor.classList.add("active");
            });
            btn.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
        });
        h2.forEach(h => {
            h.addEventListener("mouseenter", () => {
                cursor.classList.add("active");
            });
            h.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
        });
    }
        
    cursor();
});