import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

// 

gsap.to(".first", {
    duration: 1.5,
    delay: 0.7,
    top: "-100%",
    ease: "expo.inOut",
});

gsap.to(".second", {
    duration: 1.5,
    delay: 0.8,
    top: "-100%",
    ease: "expo.inOut",
});

gsap.to(".third", {
    duration: 1.5,
    delay: 0.9,
    top: "-100%",
    ease: "expo.inOut",
});