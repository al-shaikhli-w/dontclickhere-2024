import gsap from 'gsap';
import { Observer } from 'gsap/Observer';


import { preloadImages } from './lib/preloadimage.js';
import { Slideshow2 } from './lib/sliders-effects/slideshow.js';
gsap.registerPlugin(Observer);
const slides = document.querySelector('.fancy-slides');

window.addEventListener('DOMContentLoaded', () => {
    if (slides) {
        const slideshow = new Slideshow2(slides);
        document.querySelector('.slides-nav__item--prev').addEventListener('click', () => slideshow.prev());
        document.querySelector('.slides-nav__item--next').addEventListener('click', () => slideshow.next());

        Observer.create({
            type: 'touch,pointer',
            onDown: () => slideshow.prev(),
            onUp: () => slideshow.next(),
            wheelSpeed: -1,
            tolerance: 10
        });
        
        preloadImages('.slide__img').then(() => document.body.classList.remove('loading'));

    }

});