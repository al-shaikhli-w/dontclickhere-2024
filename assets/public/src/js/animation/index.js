import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

// 

window.addEventListener("DOMContentLoaded", () => {
    // TODO scroll always to top when refrashed the page.
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
    // remove the overflow from body
    setTimeout(function () {
        if (document.body.classList.contains("overflow-hidden")) {
            document.body.classList.remove("overflow-hidden");
        }
    }, 2000);
})