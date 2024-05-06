import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Rellax from 'rellax';

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero__subheading", {
        duration: 1,
        delay: 0.2,
        opacity: 1,
        ease: "expo.inOut",
    });
    gsap.to(".hero__heading", {
        duration: 1,
        delay: 0.4,
        opacity: "1",
        ease: "expo.inOut",
    });
    gsap.to(".hero__text", {
        duration: 1,
        delay: 0.6,
        opacity: 1,
        ease: "expo.inOut",
    });
    gsap.to(".hero__cta", {
        duration: 1,
        delay: 0.8,
        opacity: "1",
        ease: "expo.inOut",
    });
    gsap.to(".logo-big", {
        duration: 1,
        delay: 1,
        opacity: "0.7",
        ease: "expo.inOut",
    });
    gsap.to(".hero .container", {
        duration: 1,
        delay: 1.2,
        ease: "expo.inOut",
        onStart: function () {
            this.targets().forEach(function (target) {
                target.classList.add('animate'); // Add the 'animate' class to start the animation
            });
        },
    });

    const clientLogos = document.querySelectorAll(".client-logos .client-logo");
    clientLogos.forEach((clientLogo, index) => {
        gsap.to(clientLogo, {
            duration: 1,
            delay: 1 + index * 0.2,
            opacity: "1",
            ease: "expo.inOut",
        });
    });
    const burgermenu = document.querySelector('.burgermenu');
    const menuItems = document.querySelectorAll(".menu > li");
    burgermenu.addEventListener('click', () => {
        menuItems.forEach((menuItem) => {
            menuItem.style.opacity = 0;
        }
        );
        menuItems.forEach((menuItem, index) => {
            gsap.to(menuItem, {
                duration: 1,
                delay: 0.5 + index * 0.2,
                opacity: 1,
                ease: "expo.inOut",
            });
        }
        );
    }
    );
    // set item has run on localStorage
    localStorage.setItem("run", "true");
    // get item from localStorage
    const run = localStorage.getItem("run");
    // check if run is true
    if (run === "true") {
        // run the animation
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
            }
        }, 2000);
        localStorage.setItem("run", "false");
    }

    // new Rellax('.logo-b-t', {
    //     speed: -1,
    //     center: true,
    //     wrapper: null,
    //     round: true,
    //     vertical: true,
    //     horizontal: false
    // });
    new Rellax('#services-container', {
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
})