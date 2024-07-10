import {
    gsap
} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Rellax from 'rellax';

//import Files
import "./global";
import "./singlePost";

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero__subheading");
    if (hero) {
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
        // gsap.to(".logo-big", {
        //     duration: 1,
        //     delay: 1,
        //     opacity: "0.7",
        //     ease: "expo.inOut",
        // });
        // gsap.to(".hero .container", {
        //     duration: 1,
        //     delay: 1.2,
        //     ease: "expo.inOut",
        //     onStart: function () {
        //         this.targets().forEach(function (target) {
        //             target.classList.add('animate'); // Add the 'animate' class to start the animation
        //         });
        //     },
        // });

        const clientLogos = document.querySelectorAll(".client-logos .client-logo");
        if (clientLogos) {
            clientLogos.forEach((clientLogo, index) => {
                gsap.to(clientLogo, {
                    duration: 1,
                    delay: 1 + index * 0.2,
                    opacity: "1",
                    ease: "expo.inOut",
                });
            });
        }
    }
    const burgermenu = document.querySelector('.burgermenu');
    const menuItems = document.querySelectorAll(".menu > li");
    burgermenu.addEventListener('click', () => {
        menuItems.forEach((menuItem) => {
            menuItem.style.opacity = 0;
        });
        menuItems.forEach((menuItem, index) => {
            gsap.to(menuItem, {
                duration: 1,
                delay: 0.5 + index * 0.2,
                opacity: 1,
                ease: "expo.inOut",
            });
        });
    });

    new Rellax('body');
    const mouseyScrollFromTheHeroSectionToTheNextSection = document.querySelector('.scroll-downs .mousey');
    if (mouseyScrollFromTheHeroSectionToTheNextSection) {

        mouseyScrollFromTheHeroSectionToTheNextSection.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});