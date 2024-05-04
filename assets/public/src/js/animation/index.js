import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

// 
document.body.scrollTop = 0;
window.addEventListener("DOMContentLoaded", () => {

    gsap.to(".first", {
        duration: 1.5,
        delay: 0.8,
        right: "-100%",
        ease: "expo.inOut",
    });

    gsap.to(".second", {
        duration: 1.5,
        delay: 0.9,
        right: "-100%",
        ease: "expo.inOut",
    });

    gsap.to(".third", {
        duration: 1.5,
        delay: 1,
        right: "-100%",
        ease: "expo.inOut",
    });
    // remove the overflow from body
    setTimeout(function () {
        if (document.body.classList.contains("overflow-hidden")) {
            document.body.classList.remove("overflow-hidden");
            document.querySelector(".overlay").remove();
            gsap.to(".third", {
                duration: 1,
                delay: 1,
                // display: "none",
                opacity: 0,
                ease: "expo.inOut",
            });
        }
    }, 2000);
})